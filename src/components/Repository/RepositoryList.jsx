import { useState } from 'react';
import { RepositoryFilter } from './RepositoryFilter';
import { Book } from 'lucide-react';
import { RepositoryCard } from './RepositoryCard';
import { Button } from '../common/Button';

export const RepositoryList = ({ repos, hasMore, loadingMore, onLoadMore }) => {
  const [filter, setFilter] = useState('');

  const filteredRepos = repos.filter(repo =>
    repo.name.toLowerCase().includes(filter.toLowerCase()) ||
    (repo.description && repo.description.toLowerCase().includes(filter.toLowerCase()))
  );

  if (repos.length === 0) {
    return (
      <div className="bg-gray-800 rounded-lg p-8 text-center text-gray-400 border border-gray-700">
        This user does not have any public repositories yet
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Book className="w-5 h-5" />
        New Repository  ({repos.length})
      </h3>
      
      <RepositoryFilter value={filter} onChange={setFilter} />
      
      <div className="space-y-4">
        {filteredRepos.length === 0 ? (
          <div className="bg-gray-800 rounded-lg p-6 text-center text-gray-400 border border-gray-700">
            No repositories match the search
          </div>
        ) : (
          filteredRepos.map((repo) => (
            <RepositoryCard key={repo.id} repo={repo} />
          ))
        )}
        
        {hasMore && filteredRepos.length > 0 && (
          <Button
            onClick={onLoadMore}
            disabled={loadingMore}
            variant="secondary"
            className="w-full"
          >
            {loadingMore ? 'Loading...' : 'Loading More'}
          </Button>
        )}
      </div>
    </div>
  );
};