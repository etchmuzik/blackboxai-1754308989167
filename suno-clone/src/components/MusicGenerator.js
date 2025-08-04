'use client'

import { useState } from 'react';
import AudioPlayer from './AudioPlayer';

export default function MusicGenerator() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [musicUrl, setMusicUrl] = useState(null);
  const [musicTitle, setMusicTitle] = useState('');
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt');
      return;
    }
    
    setError('');
    setLoading(true);
    
    try {
      const res = await fetch('/api/generateMusic', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setMusicUrl(data.musicUrl);
        setMusicTitle(data.title || prompt.slice(0, 50) + '...');
      } else {
        setError(data.error || 'Something went wrong');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    }
    
    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleGenerate();
    }
  };

  return (
    <section className="hero-section">
      <h1 className="hero-title">
        Make any song you can imagine
      </h1>
      <p className="hero-subtitle">
        Start with a simple prompt or dive into our pro editing tools, your next track is just a step away.
      </p>
      
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '20px' }}>
          <span style={{ 
            backgroundColor: 'var(--accent-color)', 
            color: 'white', 
            padding: '4px 12px', 
            borderRadius: '16px', 
            fontSize: '12px',
            fontWeight: '500'
          }}>
            # Create
          </span>
          <span style={{ 
            backgroundColor: 'transparent', 
            color: 'var(--text-secondary)', 
            padding: '4px 12px', 
            borderRadius: '16px', 
            fontSize: '12px',
            border: '1px solid var(--border-color)'
          }}>
            I'm a musician
          </span>
        </div>
      </div>

      <textarea
        className="music-input"
        placeholder="Enter your music prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        onKeyPress={handleKeyPress}
        rows={3}
        style={{
          resize: 'vertical',
          minHeight: '80px'
        }}
      />
      
      <div className="button-group">
        <button onClick={handleGenerate} disabled={loading}>
          {loading && <span className="loading-spinner"></span>}
          {loading ? 'Generating...' : 'Create'}
        </button>
        <button className="button-secondary">
          I'm a musician
        </button>
      </div>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {musicUrl && (
        <AudioPlayer 
          audioUrl={musicUrl} 
          title={musicTitle}
        />
      )}

      {/* Brand logos section */}
      <div style={{ 
        marginTop: '60px', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        gap: '40px',
        flexWrap: 'wrap',
        opacity: 0.6
      }}>
        <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Rolling Stone</span>
        <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Variety</span>
        <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Wired</span>
        <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Billboard</span>
        <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Complex</span>
        <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Forbes</span>
      </div>
    </section>
  );
}
