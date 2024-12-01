import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import axios from 'axios';

const EXPERTISE_OPTIONS = [
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biology',
  'Computer Science',
  'Literature',
  'History',
  'Art',
  'Music',
  'Languages',
  'SAT Prep',
  'College Applications',
  'Research Methods'
];

export default function MentorOnboarding() {
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const userData = location.state || { name: '', email: '' };
  
  const [formData, setFormData] = useState({
    name: userData.name,
    email: userData.email,
    expertise: [],
    bio: ''
  });

  const handleExpertiseToggle = (expertise) => {
    setFormData(prev => ({
      ...prev,
      expertise: prev.expertise.includes(expertise)
        ? prev.expertise.filter(e => e !== expertise)
        : prev.expertise.length < 3
          ? [...prev.expertise, expertise]
          : prev.expertise
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Name is required');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Email is required');
      return false;
    }
    if (formData.expertise.length === 0) {
      setError('Please select at least one area of expertise');
      return false;
    }
    if (!formData.bio.trim()) {
      setError('Bio is required');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:5000/api/mentors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const contentType = response.headers.get("content-type");
      if (!response.ok) {
        const errorMessage = contentType?.includes("application/json") 
          ? (await response.json()).message 
          : 'Failed to create mentor profile';
        throw new Error(errorMessage);
      }

      const data = contentType?.includes("application/json") 
        ? await response.json()
        : {};
      
      console.log('Mentor profile created:', data);
      
      localStorage.setItem('mentorId', data._id);
      localStorage.setItem('userRole', 'mentor');
      
      navigate('/dashboard/mentor');
    } catch (error) {
      console.error('Error submitting mentor data:', error);
      setError(error.message || 'Failed to create mentor profile. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <BookOpen className="mx-auto h-12 w-12 text-indigo-600" />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Complete Your Mentor Profile</h2>
          <p className="mt-2 text-gray-600">Share your expertise and availability with potential mentees</p>
        </div>

        {error && (
          <div className="mb-4 p-4 text-red-700 bg-red-100 rounded-md">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-lg shadow">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              disabled
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 text-gray-500"
              value={formData.email}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Areas of Expertise (Select up to 3)
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {EXPERTISE_OPTIONS.map((expertise) => (
                <button
                  key={expertise}
                  type="button"
                  onClick={() => handleExpertiseToggle(expertise)}
                  disabled={!formData.expertise.includes(expertise) && formData.expertise.length >= 3}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    formData.expertise.includes(expertise)
                      ? 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200'
                      : formData.expertise.length >= 3
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {expertise}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
              Bio
            </label>
            <textarea
              id="bio"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Tell us about your background, teaching experience, and mentoring style..."
              value={formData.bio}
              onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
                ${isSubmitting ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
            >
              {isSubmitting ? 'Creating Profile...' : 'Complete Profile'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}