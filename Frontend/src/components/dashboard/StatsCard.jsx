export default function StatsCard({ title, value, icon: Icon, trend }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center">
        <div className="p-2 bg-indigo-50 rounded-lg">
          <Icon className="h-6 w-6 text-indigo-600" />
        </div>
        <h3 className="ml-3 text-lg font-medium text-gray-900">{title}</h3>
      </div>
      
      <div className="mt-4">
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
        {trend && (
          <p className="mt-2 flex items-center text-sm">
            <span className={trend.positive ? 'text-green-600' : 'text-red-600'}>
              {trend.positive ? '↑' : '↓'} {trend.value}%
            </span>
            <span className="ml-2 text-gray-500">{trend.label}</span>
          </p>
        )}
      </div>
    </div>
  );
}