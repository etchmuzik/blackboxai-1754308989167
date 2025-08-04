'use client'

import { useState, useRef, useEffect } from 'react';

export default function AudioPlayer({ audioUrl, title = "Generated Music" }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', () => setIsPlaying(false));

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, [audioUrl]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audio.currentTime = percent * duration;
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Generate fake waveform data for visualization
  const generateWaveform = () => {
    return Array.from({ length: 100 }, () => Math.random() * 100 + 10);
  };

  const waveformData = generateWaveform();

  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
      border: '1px solid var(--border-color)',
      borderRadius: '20px',
      padding: '30px',
      marginTop: '40px',
      maxWidth: '800px',
      margin: '40px auto 0'
    }}>
      <audio ref={audioRef} src={audioUrl} />
      
      {/* Track Info */}
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '30px' 
      }}>
        <h3 style={{ 
          fontSize: '1.5rem', 
          fontWeight: '600', 
          marginBottom: '10px',
          background: 'linear-gradient(135deg, #ffffff 0%, #a855f7 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          {title}
        </h3>
        <p style={{ 
          color: 'var(--text-secondary)', 
          fontSize: '14px' 
        }}>
          AI Generated • {formatTime(duration)}
        </p>
      </div>

      {/* Waveform Visualization */}
      <div style={{
        height: '80px',
        background: 'rgba(0, 0, 0, 0.3)',
        borderRadius: '10px',
        padding: '10px',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'end',
        gap: '2px',
        cursor: 'pointer',
        overflow: 'hidden'
      }}
      onClick={handleSeek}
      >
        {waveformData.map((height, index) => {
          const progress = currentTime / duration;
          const isPlayed = index / waveformData.length < progress;
          
          return (
            <div
              key={index}
              style={{
                height: `${height}%`,
                width: '100%',
                background: isPlayed 
                  ? 'linear-gradient(to top, #a855f7, #3b82f6)' 
                  : 'rgba(255, 255, 255, 0.3)',
                borderRadius: '2px',
                transition: 'all 0.1s ease'
              }}
            />
          );
        })}
      </div>

      {/* Progress Bar */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.1)',
        height: '6px',
        borderRadius: '3px',
        marginBottom: '20px',
        cursor: 'pointer',
        overflow: 'hidden'
      }}
      onClick={handleSeek}
      >
        <div style={{
          background: 'linear-gradient(90deg, #a855f7 0%, #3b82f6 100%)',
          height: '100%',
          width: `${(currentTime / duration) * 100}%`,
          borderRadius: '3px',
          transition: 'width 0.1s ease'
        }} />
      </div>

      {/* Controls */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px'
      }}>
        {/* Time Display */}
        <span style={{ 
          color: 'var(--text-secondary)', 
          fontSize: '14px',
          minWidth: '80px'
        }}>
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>

        {/* Play Controls */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '15px' 
        }}>
          <button
            onClick={togglePlay}
            style={{
              background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '20px',
              color: 'white',
              transition: 'all 0.2s ease',
              boxShadow: '0 5px 15px rgba(168, 85, 247, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.1)';
              e.target.style.boxShadow = '0 8px 25px rgba(168, 85, 247, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 5px 15px rgba(168, 85, 247, 0.3)';
            }}
          >
            {isPlaying ? '⏸️' : '▶️'}
          </button>
        </div>

        {/* Volume Control */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '10px',
          minWidth: '120px'
        }}>
          <span style={{ fontSize: '16px' }}>🔊</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            style={{
              width: '80px',
              height: '4px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '2px',
              outline: 'none',
              cursor: 'pointer'
            }}
          />
        </div>
      </div>

      {/* Download Options */}
      <div style={{
        display: 'flex',
        gap: '10px',
        justifyContent: 'center',
        marginTop: '25px',
        paddingTop: '20px',
        borderTop: '1px solid var(--border-color)'
      }}>
        <button style={{
          background: 'transparent',
          border: '1px solid var(--accent-color)',
          color: 'var(--accent-color)',
          padding: '8px 16px',
          borderRadius: '8px',
          fontSize: '12px',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'var(--accent-color)';
          e.target.style.color = 'white';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'transparent';
          e.target.style.color = 'var(--accent-color)';
        }}
        >
          Download MP3
        </button>
        <button style={{
          background: 'transparent',
          border: '1px solid var(--accent-color)',
          color: 'var(--accent-color)',
          padding: '8px 16px',
          borderRadius: '8px',
          fontSize: '12px',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'var(--accent-color)';
          e.target.style.color = 'white';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'transparent';
          e.target.style.color = 'var(--accent-color)';
        }}
        >
          Download WAV
        </button>
        <button style={{
          background: 'transparent',
          border: '1px solid var(--accent-color)',
          color: 'var(--accent-color)',
          padding: '8px 16px',
          borderRadius: '8px',
          fontSize: '12px',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'var(--accent-color)';
          e.target.style.color = 'white';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'transparent';
          e.target.style.color = 'var(--accent-color)';
        }}
        >
          Export MIDI
        </button>
      </div>
    </div>
  );
}
