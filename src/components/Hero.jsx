import React, { useState, useEffect } from 'react';
import { personalInfo, stats } from '../data/portfolioData';

export default function Hero() {
  const [taglineIdx, setTaglineIdx] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [liveTime, setLiveTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        });
        setLiveTime(`${formatted} IST`);
      } catch {
        setLiveTime('Live • India');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const current = personalInfo.taglines[taglineIdx];
    const speed = deleting ? 30 : 65;

    const timer = setTimeout(() => {
      if (!deleting && displayText === current) {
        setTimeout(() => setDeleting(true), 2200);
      } else if (deleting && displayText === '') {
        setDeleting(false);
        setTaglineIdx((prev) => (prev + 1) % personalInfo.taglines.length);
      } else {
        setDisplayText(
          deleting
            ? current.substring(0, displayText.length - 1)
            : current.substring(0, displayText.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, deleting, taglineIdx]);

  return (
    <section id="home" className="hero-section">
      {/* Linear Ambient Glow Spotlight */}
      <div className="hero-spotlight-aurora"></div>

      <div className="container">
        <div className="hero-showcase-layout">
          {/* Left Column: Core Identity & Actions */}
          <div className="hero-text-content">
            {/* Live Availability Badge */}
            <div className="hero-availability-badge">
              <span className="live-ping-dot"></span>
              <span className="badge-status-text">Available for Q2 2026 Roles &amp; Contracts</span>
              <span className="badge-divider-dot">•</span>
              <span className="badge-time-text">{liveTime || 'Faridabad, NCR'}</span>
            </div>

            {/* Main Greeting & Headline */}
            <h1 className="hero-main-title">
              Hi, I'm <span className="highlight-name">{personalInfo.name}</span>
            </h1>

            {/* Dynamic Animated Role Subtitle */}
            <div className="hero-dynamic-subtitle">
              <span className="role-prefix">Specialist in</span>
              <span className="dynamic-role-text">
                {displayText || 'Full-Stack Web (MERN & PHP) & Flutter Apps'}
              </span>
              <span className="type-cursor">|</span>
            </div>

            {/* Concise, High-Impact Narrative Statement */}
            <p className="hero-description">
              Full-Stack Web Engineer (PHP &amp; MERN Stack) and Flutter Cross-Platform Mobile Specialist
              based in <strong>Faridabad, NCR / Bihar</strong>. Over 2+ years at <strong>Mineib Creative Technology</strong>,
              I have architected and deployed <strong>12+ production client platforms</strong>, e-commerce stores, and high-performance SaaS applications.
            </p>

            {/* Quick Meta Pills */}
            <div className="hero-quick-meta">
              <span className="meta-pill">
                <i className="fas fa-location-dot"></i> Faridabad, NCR &amp; Bihar
              </span>
              <span className="meta-pill">
                <i className="fas fa-briefcase"></i> Mineib Creative Tech
              </span>
              <span className="meta-pill">
                <i className="fas fa-graduation-cap"></i> B.Tech CSE (7.17 CGPA)
              </span>
            </div>

            {/* Action Buttons Row */}
            <div className="hero-cta-buttons">
              <a href="#projects" className="btn-hero-primary">
                <span>Explore 12+ Live Projects</span>
                <i className="fas fa-arrow-right"></i>
              </a>

              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-wa"
              >
                <i className="fab fa-whatsapp"></i>
                <span>Direct WhatsApp</span>
              </a>

              <a
                href={personalInfo.resumeUrl}
                className="btn-hero-resume"
                download="Yugesh_Pandey_Resume.pdf"
              >
                <i className="fas fa-download"></i>
                <span>Resume (PDF)</span>
              </a>
            </div>

            {/* Key Metrics / Vibrant Stats Strip */}
            <div className="hero-metrics-strip">
              {stats.map((s, idx) => (
                <div className={`metric-box metric-variant-${idx + 1}`} key={idx}>
                  <div className="metric-icon-mini">
                    {idx === 0 && <i className="fas fa-layer-group"></i>}
                    {idx === 1 && <i className="fas fa-smile"></i>}
                    {idx === 2 && <i className="fas fa-calendar-check"></i>}
                    {idx === 3 && <i className="fas fa-award"></i>}
                  </div>
                  <div className="metric-number">
                    {s.value}
                    <span className="metric-suffix">{s.suffix}</span>
                  </div>
                  <div className="metric-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: High-Definition Portrait with Floating Colorful Glass Badges */}
          <div className="hero-portrait-showcase">
            <div className="portrait-image-wrapper">
              {/* Iridescent Glowing Ring */}
              <div className="portrait-glow-ring"></div>

              <img
                src={personalInfo.profileImage}
                alt={`${personalInfo.name} - Full Stack & Flutter Developer`}
                className="portrait-main-img"
                width="360"
                height="414"
                fetchPriority="high"
                decoding="async"
                onError={(e) => {
                  e.target.src = '/assets/images/profile_orig.jpg';
                }}
              />

              {/* Floating Top Glass Tag */}
              <div className="portrait-top-pill">
                <i className="fas fa-bolt" style={{ color: '#f59e0b' }}></i>
                <span>12+ Production Builds</span>
              </div>

              {/* Status Floating Pill */}
              <div className="portrait-floating-status">
                <div className="status-indicator-dot"></div>
                <div>
                  <div className="status-name">{personalInfo.name}</div>
                  <div className="status-role">Full-Stack &amp; Flutter Dev</div>
                </div>
                <div className="status-verify-check" title="Verified Professional">
                  <i className="fas fa-check"></i>
                </div>
              </div>
            </div>

            {/* Core Tech Stack Badges */}
            <div className="hero-tech-orbit">
              <span className="tech-orbit-item orbit-react">
                <i className="fab fa-react"></i> React.js
              </span>
              <span className="tech-orbit-item orbit-flutter">
                <i className="fas fa-mobile-alt"></i> Flutter
              </span>
              <span className="tech-orbit-item orbit-php">
                <i className="fab fa-php"></i> PHP 8.x
              </span>
              <span className="tech-orbit-item orbit-node">
                <i className="fab fa-node-js"></i> Node.js
              </span>
              <span className="tech-orbit-item orbit-db">
                <i className="fas fa-database"></i> MySQL
              </span>
              <span className="tech-orbit-item orbit-seo">
                <i className="fas fa-chart-line"></i> SEO
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
