import { Users, Book } from 'lucide-react';

export const UserStats = ({ followers, following, publicRepos }) => {
  return (
    <div className="flex gap-6 text-sm">
      <div className="flex items-center gap-2">
        <Users className="w-4 h-4" />
        <span><strong>{followers}</strong> followers</span>
      </div>
      <div className="flex items-center gap-2">
        <span><strong>{following}</strong> following</span>
      </div>
      <div className="flex items-center gap-2">
        <Book className="w-4 h-4" />
        <span><strong>{publicRepos}</strong> repos</span>
      </div>
    </div>
  );
};