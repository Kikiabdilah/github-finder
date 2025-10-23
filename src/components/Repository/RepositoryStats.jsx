import { Star, GitFork } from 'lucide-react';

export const RepositoryStats = ({ language, stars, forks, updatedAt }) => {
  return (
    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
      {language && (
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
          {language}
        </div>
      )}
      <div className="flex items-center gap-1">
        <Star className="w-4 h-4" />
        {stars}
      </div>
      <div className="flex items-center gap-1">
        <GitFork className="w-4 h-4" />
        {forks}
      </div>
      <div>
        Updated: {new Date(updatedAt).toLocaleDateString('id-ID')}
      </div>
    </div>
  );
};