import { UserStats } from './UserStats';
import { UserInfo } from './UserInfo';

export const UserProfile = ({ user }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <div className="flex flex-col sm:flex-row gap-6">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-32 h-32 rounded-full border-4 border-gray-700"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">{user.name || user.login}</h2>
          <p className="text-blue-400 mb-3">@{user.login}</p>
          {user.bio && <p className="text-gray-300 mb-4">{user.bio}</p>}
          
          <UserInfo location={user.location} blog={user.blog} />
          <UserStats 
            followers={user.followers}
            following={user.following}
            publicRepos={user.public_repos}
          />
        </div>
      </div>
    </div>
  );
};