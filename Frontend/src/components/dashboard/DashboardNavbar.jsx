import { Link, useNavigate } from 'react-router-dom';
import { Bell, MessageSquare, LogOut, User } from 'lucide-react';

export default function DashboardNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any auth tokens from localStorage
    localStorage.removeItem('token');
    // Any other cleanup needed...
    
    // Redirect to login page
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-indigo-600">
              MentorLink
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Bell className="h-6 w-6" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <MessageSquare className="h-6 w-6" />
            </button>
            <div className="relative">
              <button className="flex items-center space-x-3 focus:outline-none">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  alt="Profile"
                  className="h-8 w-8 rounded-full"
                />
                <span className="hidden md:block text-sm font-medium text-gray-700">
                  John Doe
                </span>
              </button>
            </div>
            <button 
              onClick={handleLogout}
              className="p-2 text-gray-400 hover:text-gray-500"
            >
              <LogOut className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}