'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { name: 'Create', href: '#create' },
    { name: 'DrumGPT', href: '#drums' },
    { name: 'SynthGPT', href: '#synth' },
    { name: 'Stems', href: '#stems' },
    { name: 'Remix', href: '#remix' }
  ];

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setIsDropdownOpen(false);
    router.push('/');
  };

  return (
    <header style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '20px 40px',
      borderBottom: '1px solid var(--border-color)',
      position: 'sticky',
      top: 0,
      backgroundColor: 'var(--background-color)',
      backdropFilter: 'blur(10px)',
      zIndex: 100
    }}>
      {/* Logo */}
      <Link href="/" style={{ 
        fontSize: '2rem', 
        fontWeight: '700',
        letterSpacing: '0.1rem',
        background: 'linear-gradient(135deg, #ffffff 0%, #a855f7 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        cursor: 'pointer',
        textDecoration: 'none'
      }}>
        SUNO
      </Link>

      {/* Desktop Navigation */}
      <nav style={{ 
        display: 'flex', 
        gap: '32px', 
        alignItems: 'center',
        '@media (max-width: 768px)': {
          display: 'none'
        }
      }}>
        {navItems.map((item, index) => (
          <a 
            key={index}
            href={item.href} 
            style={{ 
              color: 'var(--text-secondary)',
              fontSize: '15px',
              fontWeight: '500',
              transition: 'all 0.2s ease',
              textDecoration: 'none',
              position: 'relative',
              padding: '8px 0'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = 'var(--text-color)';
              e.target.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = 'var(--text-secondary)';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            {item.name}
          </a>
        ))}
      </nav>

      {/* Auth Section */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        {user ? (
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'transparent',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                padding: '8px 12px',
                color: 'var(--text-color)',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: '600',
                fontSize: '14px'
              }}>
                {user.name ? user.name.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}
              </div>
              <span>{user.name || user.email}</span>
              <span style={{ fontSize: '12px' }}>▼</span>
            </button>

            {isDropdownOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                marginTop: '8px',
                background: 'var(--input-bg)',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                padding: '8px 0',
                minWidth: '150px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
              }}>
                <button
                  onClick={handleLogout}
                  style={{
                    width: '100%',
                    padding: '8px 16px',
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-color)',
                    cursor: 'pointer',
                    fontSize: '14px',
                    textAlign: 'left'
                  }}
                  onMouseEnter={(e) => e.target.style.background = 'var(--border-color)'}
                  onMouseLeave={(e) => e.target.style.background = 'transparent'}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link 
              href="/signin" 
              style={{ 
                color: 'var(--text-secondary)',
                fontSize: '14px',
                fontWeight: '500',
                transition: 'color 0.2s ease',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--text-color)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
            >
              Sign In
            </Link>
            <Link href="/signup">
              <button 
                style={{
                  padding: '10px 20px',
                  fontSize: '14px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
                  border: 'none',
                  color: 'white',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 15px rgba(168, 85, 247, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-1px)';
                  e.target.style.boxShadow = '0 6px 20px rgba(168, 85, 247, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(168, 85, 247, 0.3)';
                }}
              >
                Sign Up
              </button>
            </Link>
          </>
        )}

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-color)',
            fontSize: '20px',
            cursor: 'pointer',
            padding: '8px',
            '@media (max-width: 768px)': {
              display: 'block'
            }
          }}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'var(--background-color)',
          border: '1px solid var(--border-color)',
          borderTop: 'none',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          {navItems.map((item, index) => (
            <a 
              key={index}
              href={item.href} 
              style={{ 
                color: 'var(--text-secondary)',
                fontSize: '16px',
                fontWeight: '500',
                textDecoration: 'none',
                padding: '12px 0',
                borderBottom: '1px solid var(--border-color)'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
