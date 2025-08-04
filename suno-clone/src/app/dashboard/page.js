'use client'

import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [musicHistory, setMusicHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  useEffect(() => {
    async function fetchMusicHistory() {
      setLoading(true);
      try {
        const token = localStorage.getItem('token');
        const res = await fetch('/api/user/music-history', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (res.ok) {
          const data = await res.json();
          setMusicHistory(data.history);
        }
      } catch (error) {
        console.error('Failed to fetch music history', error);
      }
      setLoading(false);
    }
    fetchMusicHistory();
  }, []);

  if (!user) {
    return <p>Please sign in to view your dashboard.</p>;
  }

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Welcome, {user.name || user.email}</h1>
      <h2>Your Music Generation History</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {musicHistory.length === 0 ? (
            <p>No music generated yet.</p>
          ) : (
            musicHistory.map((item) => (
              <li key={item.id} style={{ marginBottom: '20px' }}>
                <p><strong>Prompt:</strong> {item.prompt}</p>
                <p><strong>Title:</strong> {item.title || 'Untitled'}</p>
                {item.musicUrl && (
                  <audio controls src={item.musicUrl} style={{ width: '100%' }} />
                )}
                <p><small>Generated on: {new Date(item.createdAt).toLocaleString()}</small></p>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
