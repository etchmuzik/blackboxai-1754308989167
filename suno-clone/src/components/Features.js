'use client'

export default function Features() {
  const features = [
    {
      icon: "🎵",
      title: "AI Music Generation",
      description: "Create complete songs from text prompts using advanced AI models",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "🎤",
      title: "Vocal Separation",
      description: "Extract vocals and isolate instruments from any song",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "🎛️",
      title: "Stem Splitting",
      description: "Separate songs into individual tracks - drums, bass, vocals, and more",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: "🎹",
      title: "SynthGPT",
      description: "Generate synthesizer sounds and melodies with AI",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: "🥁",
      title: "DrumGPT",
      description: "Create dynamic drum patterns and beats",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: "🎚️",
      title: "Audio Remixing",
      description: "Transform existing songs into new remixes and variations",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: "📊",
      title: "Waveform Editor",
      description: "Visual audio editing with professional waveform interface",
      gradient: "from-teal-500 to-blue-500"
    },
    {
      icon: "💾",
      title: "Multi-Format Export",
      description: "Download in WAV, MP3, MIDI and other professional formats",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section style={{ 
      padding: '100px 20px',
      background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '700',
            marginBottom: '20px',
            background: 'linear-gradient(135deg, #ffffff 0%, #a855f7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Powerful AI Music Tools
          </h2>
          <p style={{ 
            fontSize: '1.25rem',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Everything you need to create, edit, and enhance your music with cutting-edge AI technology
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {features.map((feature, index) => (
            <div 
              key={index}
              style={{
                background: 'var(--input-bg)',
                border: '1px solid var(--border-color)',
                borderRadius: '20px',
                padding: '40px 30px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-10px)';
                e.target.style.borderColor = 'var(--accent-color)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.borderColor = 'var(--border-color)';
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: `linear-gradient(90deg, ${feature.gradient.split(' ')[1]} 0%, ${feature.gradient.split(' ')[3]} 100%)`
              }}></div>
              
              <div style={{
                fontSize: '3rem',
                marginBottom: '20px',
                filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.3))'
              }}>
                {feature.icon}
              </div>
              
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                marginBottom: '15px',
                color: 'var(--text-color)'
              }}>
                {feature.title}
              </h3>
              
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
                fontSize: '14px'
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div style={{ 
          textAlign: 'center', 
          marginTop: '80px' 
        }}>
          <button style={{
            padding: '16px 32px',
            fontSize: '18px',
            fontWeight: '600',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
            border: 'none',
            color: 'white',
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
            Start Creating Now
          </button>
        </div>
      </div>
    </section>
  );
}
