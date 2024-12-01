import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Target, BookOpen } from 'lucide-react';

const INTEREST_OPTIONS = [
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
  'Other'
];

const EXAM_OPTIONS = [
  'IIT-JEE',
  'NEET',
  'Board Exams',
  'GATE',
  'CAT',
  'Other'
];

export default function MenteeOnboarding() {
  const navigate = useNavigate();
  const location = useLocation();
  
  console.log('Location state:', location.state);
  
  const userData = location.state || { name: '', email: '' };
  console.log('User data:', userData);

  const [formData, setFormData] = useState({
    name: userData.name,
    email: userData.email,
    interests: [],
    customInterests: [],
    selectedExam: '',
    otherExam: ''
  });

  const [newCustomInterest, setNewCustomInterest] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : prev.interests.length < 3
          ? [...prev.interests, interest]
          : prev.interests
    }));
  };

  const handleExamSelect = (exam) => {
    setFormData(prev => ({
      ...prev,
      selectedExam: prev.selectedExam === exam ? '' : exam,
      otherExam: exam !== 'Other' ? '' : prev.otherExam
    }));
  };

  const handleAddCustomInterest = () => {
    if (newCustomInterest.trim()) {
      setFormData(prev => ({
        ...prev,
        customInterests: [...prev.customInterests, newCustomInterest.trim()]
      }));
      setNewCustomInterest('');
    }
  };

  const handleRemoveCustomInterest = (index) => {
    setFormData(prev => ({
      ...prev,
      customInterests: prev.customInterests.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const menteeData = {
      name: formData.name,
      email: formData.email,
      interests: [
        ...formData.interests,
        ...formData.customInterests
      ],
      goals: formData.selectedExam === 'Other' 
        ? [formData.otherExam]
        : [formData.selectedExam]
    };
    
    try {
      const response = await fetch('http://localhost:5000/api/mentees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(menteeData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Mentee profile created:', data);
      
      alert('Profile created successfully!');
      
      setTimeout(() => {
        navigate('/dashboard/mentee');
      }, 1000);
      
    } catch (error) {
      console.error('Error creating mentee profile:', error.message);
      alert('Error creating profile. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <BookOpen className="mx-auto h-12 w-12 text-indigo-600" />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Complete Your Mentee Profile</h2>
          <p className="mt-2 text-gray-600">Help us understand your learning goals and interests</p>
        </div>

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
              value={formData.name || ''}
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
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50"
              value={formData.email || ''}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Areas of Interest
            </label>
            <p className="text-sm text-gray-500 mb-2">Select up to 3 interests</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {INTEREST_OPTIONS.map((interest) => (
                <button
                  key={interest}
                  type="button"
                  onClick={() => handleInterestToggle(interest)}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    formData.interests.includes(interest)
                      ? 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200'
                      : formData.interests.length >= 3
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                  disabled={!formData.interests.includes(interest) && formData.interests.length >= 3}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Exam Preparation Goal
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
              {EXAM_OPTIONS.map((exam) => (
                <button
                  key={exam}
                  type="button"
                  onClick={() => handleExamSelect(exam)}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    formData.selectedExam === exam
                      ? 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {exam}
                </button>
              ))}
            </div>
            {formData.selectedExam === 'Other' && (
              <div className="mt-3">
                <input
                  type="text"
                  value={formData.otherExam}
                  onChange={(e) => setFormData(prev => ({ ...prev, otherExam: e.target.value }))}
                  placeholder="Please specify other exam"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            )}
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400"
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating Profile...
                </span>
              ) : (
                'Complete Profile'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}