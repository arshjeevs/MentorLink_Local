import { useNavigate } from 'react-router-dom';
import { Users, Clock, MessageSquare, Calendar, LogOut } from 'lucide-react';
import StatsCard from '../../components/dashboard/StatsCard';
import AppointmentCard from '../../components/dashboard/AppointmentCard';
import MessagePreview from '../../components/dashboard/MessagePreview';
import NotificationList from '../../components/dashboard/NotificationList';

const upcomingAppointments = [
  {
    mentor: "Alice Johnson",
    date: "March 15, 2024",
    time: "2:00 PM",
    topic: "College Application Strategy",
    status: "upcoming" 
  },
  {
    mentor: "Bob Smith",
    date: "March 16, 2024",
    time: "3:30 PM",
    topic: "SAT Prep - Mathematics",
    status: "upcoming"
  }
];

const recentMessages = [
  {
    sender: "Alice Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    preview: "Hi, I have a question about our next session...",
    time: "2h ago",
    unread: true
  },
  {
    sender: "Bob Smith",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    preview: "Thank you for the great session yesterday!",
    time: "1d ago",
    unread: false
  }
];

const notifications = [
  {
    id: "1",
    type: "appointment",
    title: "New Session Request",
    description: "Alice Johnson requested a mentoring session",
    time: "2 hours ago",
    read: false
  },
  {
    id: "2",
    type: "message",
    title: "New Message",
    description: "You have a new message from Bob Smith",
    time: "1 day ago",
    read: true
  }
];

export default function MentorDashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include', // Important for cookies
      });

      if (response.ok) {
        // Clear any local storage items if you have any
        localStorage.removeItem('user');
        // Redirect to login page
        navigate('/login');
      } else {
        throw new Error('Logout failed');
      }
    } catch (error) {
      console.error('Logout error:', error);
      alert('Failed to logout. Please try again.');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Mentor Dashboard</h1>
      
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Active Mentees"
          value={12}
          icon={Users}
          trend={{ value: 8, label: "vs last month", positive: true }}
        />
        <StatsCard
          title="Hours Mentored"
          value={48}
          icon={Clock}
          trend={{ value: 12, label: "vs last month", positive: true }}
        />
        <StatsCard
          title="Response Rate"
          value="95%"
          icon={MessageSquare}
          trend={{ value: 3, label: "vs last month", positive: true }}
        />
        <StatsCard
          title="Upcoming Sessions"
          value={5}
          icon={Calendar}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h2 className="text-lg font-semibold mb-4">Upcoming Appointments</h2>
          <div className="space-y-4">
            {upcomingAppointments.map((appointment, index) => (
              <AppointmentCard key={index} {...appointment} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Recent Messages</h2>
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
    </div>
  );
}