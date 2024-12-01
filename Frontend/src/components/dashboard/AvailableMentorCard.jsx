import PropTypes from 'prop-types';
import { Star, Calendar, BookOpen } from 'lucide-react';

export default function AvailableMentorCard({
  name,
  university,
  expertise,
  rating,
  imageUrl,
  availability,
  hourlyRate
}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start space-x-4">
        <img
          src={imageUrl}
          alt={name}
          className="h-16 w-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">{university}</p>
          
          <div className="flex items-center mt-2">
            <Star className="h-4 w-4 text-yellow-400" />
            <span className="ml-1 text-sm text-gray-600">{rating}</span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-semibold text-indigo-600">${hourlyRate}/hr</p>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <BookOpen className="h-4 w-4 mr-2" />
          <span>Expertise:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {expertise.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 text-xs bg-indigo-50 text-indigo-600 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <Calendar className="h-4 w-4 mr-2" />
          <span>Available on:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {availability.map((day) => (
            <span
              key={day}
              className="px-2 py-1 text-xs bg-green-50 text-green-600 rounded-full"
            >
              {day}
            </span>
          ))}
        </div>
      </div>

      <button className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors">
        Schedule Session
      </button>
    </div>
  );
}

AvailableMentorCard.propTypes = {
  name: PropTypes.string.isRequired,
  university: PropTypes.string.isRequired,
  expertise: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  availability: PropTypes.arrayOf(PropTypes.string).isRequired,
  hourlyRate: PropTypes.number.isRequired
};