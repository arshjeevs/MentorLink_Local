import { Users, Target, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Our Mission</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            MentorLink bridges the gap between high school students and college mentors,
            creating meaningful connections that inspire academic excellence and personal growth.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="text-center">
            <div className="bg-indigo-100 p-4 rounded-full inline-block mb-4">
              <Users className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-gray-600">
              Building a supportive network of students and mentors who share knowledge and experiences.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-100 p-4 rounded-full inline-block mb-4">
              <Target className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
            <p className="text-gray-600">
              Striving for academic excellence through personalized guidance and support.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-100 p-4 rounded-full inline-block mb-4">
              <Sparkles className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">
              Embracing new ways of learning and connecting in the digital age.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 mb-4">
              MentorLink was founded in 2023 by a group of college students who recognized
              the challenges high school students face when preparing for college and
              advanced academics.
            </p>
            <p className="text-gray-600 mb-4">
              What started as a small initiative at Stanford University has grown into
              a nationwide platform connecting thousands of students with mentors who
              are passionate about education and giving back to the community.
            </p>
            <p className="text-gray-600">
              Today, MentorLink continues to grow and evolve, driven by our commitment
              to making quality mentorship accessible to every student who seeks to
              learn and grow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}