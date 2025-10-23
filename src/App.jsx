import { Github } from 'lucide-react';
import { useGitHub } from './hooks/useGitHub';
import { SearchBar } from './components/SearchBar/SearchBar';
import { ErrorMessage } from './components/common/ErrorMessage';
import { UserProfile } from './components/UserProfile/UserProfile';
import { RepositoryList } from './components/Repository/RepositoryList';
import { LoadingSkeleton } from './components/common/LoadingSkeleton';

function App() {
  const {
    user,
    repos,
    loading,
    error,
    hasMore,
    loadingMore,
    searchUser,
    loadMoreRepos
  } = useGitHub();

  return (
    <div className=" bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 max-w-6xl min-h-screen min-w-[1350px]">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Github className="w-12 h-12" />
            <h1 className="text-4xl font-bold">GitHub User Finder</h1>
          </div>
          <p className="text-gray-400">Find User GitHub And See Their Repository</p>
        </div>

        <SearchBar onSearch={searchUser} loading={loading} />
        
        {loading && <LoadingSkeleton />}
        
        <ErrorMessage message={error} />

        {user && (
          <div className="space-y-6">
            <UserProfile user={user} />
            <RepositoryList
              repos={repos}
              hasMore={hasMore}
              loadingMore={loadingMore}
              onLoadMore={loadMoreRepos}
            />
          </div>
        )}

        {!user && !loading && !error && (
          <div className="bg-gray-800/50 border-2 border-dashed border-gray-700 rounded-lg p-12 text-center mt-8">
            <Github className="w-16 h-16 mx-auto mb-4 text-gray-600" />
            <p className="text-gray-400 text-lg">
              Enter a GitHub username to get started
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Try searching for "torvalds", "gaearon", or "octocat"
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;