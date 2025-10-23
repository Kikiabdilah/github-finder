export const LoadingSkeleton = () => {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <div className="flex gap-6">
          <div className="w-32 h-32 bg-gray-700 rounded-full"></div>
          <div className="flex-1 space-y-3">
            <div className="h-6 bg-gray-700 rounded w-48"></div>
            <div className="h-4 bg-gray-700 rounded w-32"></div>
            <div className="h-4 bg-gray-700 rounded w-full"></div>
            <div className="h-4 bg-gray-700 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};