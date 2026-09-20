import { useState, useEffect } from 'react';
import { GithubUserData } from '../types/portfolio';
import { INITIAL_GITHUB_DATA } from '../data/portfolioData';

export function useGithubData(username: string = 'adityarg1947') {
  const [data, setData] = useState<GithubUserData>(INITIAL_GITHUB_DATA);
  const [loading, setLoading] = useState<boolean>(true);
  const [isLive, setIsLive] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    async function fetchGithubStats() {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
          throw new Error('GitHub API response not ok');
        }
        const json = await response.json();

        if (isMounted) {
          setData({
            username: json.login || username,
            name: json.name || 'Aditya Golhar',
            bio: json.bio || INITIAL_GITHUB_DATA.bio,
            publicRepos: json.public_repos ?? INITIAL_GITHUB_DATA.publicRepos,
            followers: json.followers ?? INITIAL_GITHUB_DATA.followers,
            following: json.following ?? INITIAL_GITHUB_DATA.following,
            profileUrl: json.html_url || `https://github.com/${username}`,
            avatarUrl: json.avatar_url,
          });
          setIsLive(true);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          // Keep initialized fallback data cleanly
          setIsLive(false);
          setLoading(false);
        }
      }
    }

    fetchGithubStats();

    return () => {
      isMounted = false;
    };
  }, [username]);

  return { data, loading, isLive };
}
