import { RepositoryStats } from './RepositoryStats';

export const RepositoryCard = ({ repo }) => {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-gray-800 rounded-lg p-5 border border-gray-700 hover:border-blue-500 transition-colors"
    >
      <div className="flex items-start justify-between mb-2">
        <h4 className="text-lg font-semibold text-blue-400 hover:underline">
          {repo.name}
        </h4>
        <span className="text-xs bg-gray-700 px-2 py-1 rounded">
          {repo.visibility}
        </span>
      </div>
      
      {repo.description && (
        <p className="text-gray-400 text-sm mb-3">{repo.description}</p>
      )}
      
      <RepositoryStats
        language={repo.language}
        stars={repo.stargazers_count}
        forks={repo.forks_count}
        updatedAt={repo.updated_at}
      />
    </a>
  );
};