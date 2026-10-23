import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'projects', 'skills', 'contact'];
      const scrollY = window.pageYOffset;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 180;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNav = (id) => {
    setActiveSection(id);
    setMobileOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="floating-navbar-wrap">
      <nav className="floating-navbar">
        {/* Brand */}
        <a href="#home" className="nav-brand" onClick={(e) => { e.preventDefault(); handleNav('home'); }}>
          <div className="brand-monogram">{personalInfo.nickname}</div>
          <div className="brand-name">
            Yugesh <span>Pandey</span>
          </div>
        </a>

        {/* Center Pill Menu */}
        <ul className="nav-links-capsule">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-item-btn ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => handleNav(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="nav-cta-group">
          <div className="hire-radar-badge">
            <span className="radar-ping"></span>
            <span>Available for Work</span>
          </div>

          <a
            href={personalInfo.resumeUrl}
            className="btn-bento-glass"
            style={{ padding: '8px 16px', fontSize: '0.82rem' }}
            download="Yugesh_Pandey_Resume.pdf"
          >
            <i className="fas fa-file-download"></i>
            <span>CV</span>
          </a>

          <button
            className="btn-nav-action"
            onClick={() => handleNav('contact')}
          >
            <span>Let's Talk</span>
            <i className="fas fa-arrow-right"></i>
          </button>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation"
          >
            <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            top: '80px',
            left: '20px',
            right: '20px',
            background: 'rgba(8, 12, 26, 0.96)',
            backdropFilter: 'blur(20px)',
            border: '1px solid var(--border-hover)',
            borderRadius: 'var(--radius-md)',
            padding: '24px',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.8)'
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              style={{
                background: activeSection === item.id ? 'rgba(0, 245, 212, 0.15)' : 'transparent',
                color: activeSection === item.id ? 'var(--electric-cyan)' : '#fff',
                border: 'none',
                padding: '12px',
                borderRadius: '8px',
                textAlign: 'left',
                fontWeight: '600',
                fontSize: '1rem',
                cursor: 'pointer'
              }}
            >
              {item.label}
            </button>
          ))}
          <a
            href={personalInfo.resumeUrl}
            className="btn-bento-glass"
            download="Yugesh_Pandey_Resume.pdf"
            style={{ textAlign: 'center', justifyContent: 'center' }}
          >
            <i className="fas fa-file-download"></i> Download Resume
          </a>
        </div>
      )}
    </div>
  );
}
