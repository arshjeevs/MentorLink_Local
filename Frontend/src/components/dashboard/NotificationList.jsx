import PropTypes from 'prop-types';
import { Bell, MessageSquare, Calendar, Award } from 'lucide-react';

const getIcon = (type) => {
  switch (type) {
    case 'message':
      return MessageSquare;
    case 'appointment':
      return Calendar;
    case 'achievement':
      return Award;
    default:
      return Bell;
  }
};

export default function NotificationList({ notifications }) {
  return (
    <div className="space-y-4">
      {notifications.map((notification) => {
        const Icon = getIcon(notification.type);
        
        return (
          <div
            key={notification.id}
            className={`flex items-start space-x-4 p-4 rounded-lg ${
              notification.read ? 'bg-white' : 'bg-indigo-50'
            }`}
          >
            <div className="flex-shrink-0">
              <Icon className="h-6 w-6 text-indigo-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">
                {notification.title}
              </p>
              <p className="text-sm text-gray-500">
                {notification.description}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {notification.time}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

NotificationList.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      read: PropTypes.bool.isRequired
    })
  ).isRequired
};