const GITHUB_API_BASE = 'https://api.github.com';

export const githubApi = {
  async getUser(username) {
    const response = await fetch(`${GITHUB_API_BASE}/users/${username}`);
    if (!response.ok) {
      throw new Error(response.status === 404 ? 'User tidak ditemukan' : 'Terjadi kesalahan');
    }
    return response.json();
  },

  async getUserRepos(username, page = 1, perPage = 10) {
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${username}/repos?per_page=${perPage}&page=${page}&sort=updated`
    );
    if (!response.ok) {
      throw new Error('Gagal mengambil repositori');
    }
    return response.json();
  }
};