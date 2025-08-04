'use client'

import { useState } from 'react';

export default function Tools() {
  const [selectedTool, setSelectedTool] = useState('generate');

  const tools = [
    {
      id: 'generate',
      name: 'AI Generate',
      icon: '🎵',
      description: 'Create complete songs from text descriptions',
      color: 'from-purple-500 to-pink-500',
      features: ['Text-to-music generation', 'Multiple genres', 'Custom length', 'Vocal & instrumental']
    },
    {
      id: 'stems',
      name: 'Stem Separation',
      icon: '🎛️',
      description: 'Extract individual tracks from any song',
      color: 'from-blue-500 to-cyan-500',
      features: ['Vocal isolation', 'Drum extraction', 'Bass separation', 'Instrument stems']
    },
    {
      id: 'remix',
      name: 'AI Remix',
      icon: '🎚️',
      description: 'Transform songs into new variations',
      color: 'from-green-500 to-emerald-500',
      features: ['Style transfer', 'Tempo changes', 'Key modulation', 'Genre switching']
    },
    {
      id: 'synth',
      name: 'SynthGPT',
      icon: '🎹',
      description: 'Generate synthesizer sounds and melodies',
      color: 'from-orange-500 to-red-500',
      features: ['Custom synth patches', 'Melody generation', 'Chord progressions', 'Sound design']
    },
    {
      id: 'drums',
      name: 'DrumGPT',
      icon: '🥁',
      description: 'Create dynamic drum patterns and beats',
      color: 'from-indigo-500 to-purple-500',
      features: ['Beat generation', 'Fill patterns', 'Groove variations', 'Multiple kits']
    },
    {
      id: 'extend',
      name: 'Audio Extend',
      icon: '⏯️',
      description: 'Extend existing tracks with AI continuation',
      color: 'from-pink-500 to-rose-500',
      features: ['Seamless extension', 'Style matching', 'Natural transitions', 'Custom length']
    }
  ];

  const currentTool = tools.find(tool => tool.id === selectedTool);

  return (
    <section style={{ 
      padding: '100px 20px',
      background: 'var(--background-color)'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '700',
            marginBottom: '20px',
            background: 'linear-gradient(135deg, #ffffff 0%, #a855f7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Choose Your Tool
          </h2>
          <p style={{ 
            fontSize: '1.25rem',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Pick a specialized AI tool to start creating your next masterpiece
          </p>
        </div>

        {/* Tool Selection Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginBottom: '60px',
          maxWidth: '1000px',
          margin: '0 auto 60px'
        }}>
          {tools.map((tool) => (
            <div
              key={tool.id}
              onClick={() => setSelectedTool(tool.id)}
              style={{
                background: selectedTool === tool.id 
                  ? `linear-gradient(135deg, ${tool.color.split(' ')[1]} 0%, ${tool.color.split(' ')[3]} 100%)`
                  : 'var(--input-bg)',
                border: selectedTool === tool.id 
                  ? 'none' 
                  : '1px solid var(--border-color)',
                borderRadius: '16px',
                padding: '25px 20px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: selectedTool === tool.id ? 'scale(1.05)' : 'scale(1)',
                boxShadow: selectedTool === tool.id 
                  ? '0 10px 30px rgba(168, 85, 247, 0.3)' 
                  : 'none'
              }}
              onMouseEnter={(e) => {
                if (selectedTool !== tool.id) {
                  e.target.style.transform = 'scale(1.02)';
                  e.target.style.borderColor = 'var(--accent-color)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedTool !== tool.id) {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.borderColor = 'var(--border-color)';
                }
              }}
            >
              <div style={{ 
                fontSize: '2.5rem', 
                marginBottom: '15px',
                filter: selectedTool === tool.id 
                  ? 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))'
                  : 'none'
              }}>
                {tool.icon}
              </div>
              <h3 style={{ 
                fontSize: '1.2rem', 
                fontWeight: '600', 
                marginBottom: '10px',
                color: selectedTool === tool.id ? 'white' : 'var(--text-color)'
              }}>
                {tool.name}
              </h3>
              <p style={{ 
                fontSize: '14px',
                color: selectedTool === tool.id ? 'rgba(255, 255, 255, 0.9)' : 'var(--text-secondary)',
                lineHeight: '1.4'
              }}>
                {tool.description}
              </p>
            </div>
          ))}
        </div>

        {/* Selected Tool Details */}
        {currentTool && (
          <div style={{
            background: `linear-gradient(135deg, ${currentTool.color.split(' ')[1]}20 0%, ${currentTool.color.split(' ')[3]}20 100%)`,
            border: '1px solid var(--border-color)',
            borderRadius: '20px',
            padding: '40px',
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <div style={{ 
              fontSize: '4rem', 
              marginBottom: '20px',
              filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.5))'
            }}>
              {currentTool.icon}
            </div>
            
            <h3 style={{ 
              fontSize: '2rem', 
              fontWeight: '700', 
              marginBottom: '15px',
              background: `linear-gradient(135deg, ${currentTool.color.split(' ')[1]} 0%, ${currentTool.color.split(' ')[3]} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              {currentTool.name}
            </h3>
            
            <p style={{ 
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              marginBottom: '30px'
            }}>
              {currentTool.description}
            </p>

            {/* Features List */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '15px',
              marginBottom: '30px'
            }}>
              {currentTool.features.map((feature, index) => (
                <div key={index} style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  fontSize: '14px',
                  color: 'var(--text-color)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  ✨ {feature}
                </div>
              ))}
            </div>

            {/* Action Button */}
            <button style={{
              background: `linear-gradient(135deg, ${currentTool.color.split(' ')[1]} 0%, ${currentTool.color.split(' ')[3]} 100%)`,
              border: 'none',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 30px rgba(168, 85, 247, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 15px 40px rgba(168, 85, 247, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 10px 30px rgba(168, 85, 247, 0.3)';
            }}
            >
              Start with {currentTool.name}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
