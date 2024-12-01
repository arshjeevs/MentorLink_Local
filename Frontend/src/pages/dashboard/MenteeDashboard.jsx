import { useState } from 'react';
import { BookOpen, Target, Award, Calendar } from 'lucide-react';
import StatsCard from '../../components/dashboard/StatsCard';
import AppointmentCard from '../../components/dashboard/AppointmentCard';
import MessagePreview from '../../components/dashboard/MessagePreview';
import NotificationList from '../../components/dashboard/NotificationList';
import MentorSearch from '../../components/dashboard/MentorSearch';

const upcomingAppointments = [
  {
    mentor: "Dr. Sarah Chen",
    date: "March 15, 2024",
    time: "2:00 PM",
    topic: "Advanced Mathematics",
    status: "upcoming"
  },
  {
    mentor: "Prof. James Wilson",
    date: "March 16, 2024",
    time: "3:30 PM",
    topic: "Physics Concepts",
    status: "upcoming"
  }
];

const recentMessages = [
  {
    sender: "Dr. Sarah Chen",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    preview: "Great progress in today's session! Keep practicing...",
    time: "2h ago",
    unread: true
  },
  {
    sender: "Prof. James Wilson",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    preview: "Here are some additional resources for your study...",
    time: "1d ago",
    unread: false
  }
];

const notifications = [
  {
    id: "1",
    type: "achievement",
    title: "New Achievement Unlocked!",
    description: "Completed 10 mentoring sessions",
    time: "2 hours ago",
    read: false
  },
  {
    id: "2",
    type: "appointment",
    title: "Session Reminder",
    description: "Your session with Dr. Sarah Chen starts in 1 hour",
    time: "1 hour ago",
    read: true
  }
];

const availableMentors = [
  {
    id: "1",
    name: "Dr. Sarah Chen",
    university: "Stanford University",
    expertise: ["Mathematics", "Physics", "Computer Science"],
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    availability: ["Mon", "Wed", "Fri"],
    hourlyRate: 50
  },
  {
    id: "2",
    name: "Prof. James Wilson",
    university: "MIT",
    expertise: ["Chemistry", "Biology", "Research Methods"],
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    availability: ["Tue", "Thu", "Sat"],
    hourlyRate: 45
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    university: "Harvard University",
    expertise: ["Literature", "Writing", "History"],
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    availability: ["Mon", "Tue", "Thu", "Fri"],
    hourlyRate: 40
  }
];

export default function MenteeDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="space-y-6">
      <div className="flex space-x-4 border-b">
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === 'overview'
              ? 'text-indigo-600 border-b-2 border-indigo-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === 'find-mentors'
              ? 'text-indigo-600 border-b-2 border-indigo-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('find-mentors')}
        >
          Find Mentors
        </button>
      </div>

      {activeTab === 'overview' ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Learning Hours"
              value={24}
              icon={BookOpen}
              trend={{ value: 15, label: "vs last month", positive: true }}
            />
            <StatsCard
              title="Goals Completed"
              value={8}
              icon={Target}
              trend={{ value: 2, label: "vs last month", positive: true }}
            />
            <StatsCard
              title="Achievements"
              value={5}
              icon={Award}
              trend={{ value: 1, label: "new this month", positive: true }}
            />
            <StatsCard
              title="Upcoming Sessions"
              value={3}
              icon={Calendar}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-semibold mb-4">Upcoming Sessions</h2>
              <div className="space-y-4">
                {upcomingAppointments.map((appointment, index) => (
                  <AppointmentCard key={index} {...appointment} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4">Messages from Mentors</h2>
              <div className="bg-white rounded-lg shadow overflow-hidden">
                {recentMessages.map((message, index) => (
                  <MessagePreview key={index} {...message} />
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Recent Notifications</h2>
            <NotificationList notifications={notifications} />
          </div>
        </>
      ) : (
        <div>
          <h2 className="text-2xl font-semibold mb-6">Find Your Perfect Mentor</h2>
          <MentorSearch mentors={availableMentors} />
        </div>
      )}
    </div>
  );
}