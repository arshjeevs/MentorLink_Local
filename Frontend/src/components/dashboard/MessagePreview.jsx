import PropTypes from 'prop-types';

export default function MessagePreview({
  sender,
  avatar,
  preview,
  time,
  unread = false
}) {
  return (
    <div className="flex items-center space-x-4 p-4 hover:bg-gray-50 cursor-pointer">
      <img
        src={avatar}
        alt={sender}
        className="h-10 w-10 rounded-full"
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <p className={`text-sm font-medium ${unread ? 'text-gray-900' : 'text-gray-600'}`}>
            {sender}
          </p>
          <p className="text-xs text-gray-500">{time}</p>
        </div>
        <p className={`text-sm truncate ${unread ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
          {preview}
        </p>
      </div>
      {unread && (
        <div className="h-2 w-2 bg-indigo-600 rounded-full"></div>
      )}
    </div>
  );
}

MessagePreview.propTypes = {
  sender: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  unread: PropTypes.bool
};