import PropTypes from 'prop-types';
import { Calendar, Clock, Video } from 'lucide-react';

export default function AppointmentCard({
  mentor,
  date,
  time,
  topic,
  status
}) {
  const statusColors = {
    upcoming: 'bg-green-100 text-green-800',
    completed: 'bg-gray-100 text-gray-800',
    cancelled: 'bg-red-100 text-red-800'
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{topic}</h3>
        <span className={`px-3 py-1 rounded-full text-sm ${statusColors[status]}`}>
          {status}
        </span>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center text-gray-600">
          <Calendar className="h-5 w-5 mr-2" />
          <span>{date}</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <Clock className="h-5 w-5 mr-2" />
          <span>{time}</span>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
              alt={mentor}
              className="h-8 w-8 rounded-full mr-2"
            />
            <span className="text-sm font-medium">{mentor}</span>
          </div>
          
          <button className="flex items-center px-3 py-1 text-sm text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50">
            <Video className="h-4 w-4 mr-1" />
            Join Call
          </button>
        </div>
      </div>
    </div>
  );
}

AppointmentCard.propTypes = {
  mentor: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['upcoming', 'completed', 'cancelled']).isRequired
};