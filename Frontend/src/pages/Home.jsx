import { Link } from 'react-router-dom';
import { Users, Award, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Connect with College Mentors
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100">
              Get guidance from experienced college students and boost your academic success
            </p>
            <Link
              to="/signup"
              className="bg-white text-indigo-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-100"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-indigo-100 p-4 rounded-full inline-block mb-4">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Mentors</h3>
              <p className="text-gray-600">
                Connect with top college students from prestigious universities
              </p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 p-4 rounded-full inline-block mb-4">
                <Clock className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Schedule</h3>
              <p className="text-gray-600">
                Book sessions that fit your schedule and learning pace
              </p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 p-4 rounded-full inline-block mb-4">
                <Award className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-600">
                Join thousands of students who improved their academic performance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Start Your Journey?</h2>
          <div className="space-x-4">
            <Link
              to="/mentors"
              className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700"
            >
              Browse Mentors
            </Link>
            <Link
              to="/about"
              className="bg-white text-indigo-600 px-8 py-3 rounded-full text-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}