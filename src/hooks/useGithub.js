import { useState } from 'react';
import { githubApi } from '../services/githubApi';

export const useGitHub = () => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [repoPage, setRepoPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const searchUser = async (username) => {
    if (!username.trim()) return;

    setLoading(true);
    setError('');
    setUser(null);
    setRepos([]);
    setRepoPage(1);

    try {
      const userData = await githubApi.getUser(username.trim());
      setUser(userData);

      const reposData = await githubApi.getUserRepos(username.trim(), 1);
      setRepos(reposData);
      setHasMore(reposData.length === 10);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreRepos = async () => {
    if (!user || loadingMore) return;

    setLoadingMore(true);
    const nextPage = repoPage + 1;

    try {
      const data = await githubApi.getUserRepos(user.login, nextPage);
      setRepos(prev => [...prev, ...data]);
      setRepoPage(nextPage);
      setHasMore(data.length === 10);
    } catch (err) {
      console.error('Error loading more repos:', err);
    } finally {
      setLoadingMore(false);
    }
  };

  return {
    user,
    repos,
    loading,
    error,
    hasMore,
    loadingMore,
    searchUser,
    loadMoreRepos
  };
};