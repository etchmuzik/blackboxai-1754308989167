export default function Footer() {
  return (
    <footer style={{ 
      textAlign: 'center', 
      padding: '40px 20px', 
      borderTop: '1px solid var(--border-color)', 
      marginTop: '80px',
      backgroundColor: 'var(--background-color)'
    }}>
      <div style={{ marginBottom: '20px' }}>
        <a 
          href="/signup" 
          style={{ 
            display: 'inline-block',
            padding: '12px 24px',
            backgroundColor: 'var(--accent-color)',
            color: 'white',
            borderRadius: '8px',
            fontWeight: '500',
            marginBottom: '20px',
            transition: 'background-color 0.2s ease'
          }}
        >
          Sign up for free
        </a>
      </div>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '20px', 
        marginBottom: '20px',
        flexWrap: 'wrap'
      }}>
        <a href="#" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>𝕏</a>
        <a href="#" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Discord</a>
        <a href="#" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>LinkedIn</a>
      </div>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '20px', 
        marginBottom: '20px',
        flexWrap: 'wrap'
      }}>
        <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>00:00/</span>
      </div>
      
      <p style={{ 
        color: 'var(--text-secondary)', 
        fontSize: '14px',
        marginBottom: '10px'
      }}>
        © 2025 Suno, Inc.
      </p>
      <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
        <a href="#" style={{ color: 'var(--text-secondary)' }}>Work at Suno</a>
      </p>
    </footer>
  );
}
