import React, { useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKey);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="inspect-drawer-overlay open"
      onClick={(e) => e.target.classList.contains('inspect-drawer-overlay') && onClose()}
    >
      <div className="inspect-drawer-container">
        <button className="drawer-close-btn" onClick={onClose} aria-label="Close Inspection">
          <i className="fas fa-times"></i>
        </button>

        <div className="drawer-banner-box">
          <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
        </div>

        <div className="drawer-body-wrap">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: 'var(--emerald-live)',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                padding: '3px 10px',
                borderRadius: '20px'
              }}
            >
              <i className="fas fa-circle-check"></i> {project.badge}
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
              {project.category}
            </span>
          </div>

          <h2 className="drawer-title">{project.title}</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.98rem' }}>
            {project.description}
          </p>

          <h4
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              color: 'var(--electric-cyan)',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginTop: '24px',
              marginBottom: '10px'
            }}
          >
            Delivered Architectural Features:
          </h4>

          <ul className="drawer-features-list">
            {project.features.map((f, i) => (
              <li key={i}>
                <i className="fas fa-check-circle"></i>
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <div style={{ marginBottom: '28px' }}>
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: 'var(--text-tertiary)',
                textTransform: 'uppercase',
                marginBottom: '10px'
              }}
            >
              Technology Stack
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {project.techStack.map((t, i) => (
                <span className="tech-tag-pill" key={i}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', paddingTop: '18px', borderTop: '1px solid var(--border-subtle)' }}>
            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-bento-primary"
                style={{ padding: '10px 20px', fontSize: '0.88rem' }}
              >
                <i className="fas fa-external-link-alt"></i> Launch Website
              </a>
            )}

            <a
              href={`https://wa.me/918521179540?text=Hi%20Yugesh,%20I%20have%20an%20inquiry%20regarding%20your%20project:%20${encodeURIComponent(
                project.title
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-bento-wa"
              style={{ padding: '10px 20px', fontSize: '0.88rem' }}
            >
              <i className="fab fa-whatsapp"></i> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
