import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="studio-footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-main-grid">
          {/* Col 1: Brand & Bio */}
          <div className="footer-brand-col">
            <div className="footer-brand-head">
              <div className="brand-monogram">{personalInfo.nickname}</div>
              <div className="brand-name">
                Yugesh <span>Pandey</span>
              </div>
            </div>
            <p className="footer-brand-bio">
              Full-Stack Web (PHP &amp; MERN) and Flutter Mobile App Specialist.
              Engineering high-performance web products, e-commerce storefronts, and cross-platform apps that drive real growth.
            </p>
            <div className="footer-status-pill">
              <span className="live-status-dot"></span>
              <span>Available for Hire &amp; Client Projects</span>
            </div>
            <div className="footer-company-pill">
              <i className="fas fa-briefcase"></i>
              <span>Full-Stack &amp; SEO @ <strong>Mineib Creative Technology</strong></span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-nav-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About &amp; Experience</a></li>
              <li><a href="#projects">Commercial Projects (12)</a></li>
              <li><a href="#skills">Technical Toolkit</a></li>
              <li><a href="#services">Capabilities &amp; Services</a></li>
              <li><a href="#contact">Contact &amp; Hire</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Connect & Socials */}
          <div className="footer-connect-col">
            <h4 className="footer-col-title">Direct Connect</h4>
            <div className="footer-contact-links">
              <a href={personalInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="footer-contact-item">
                <i className="fab fa-whatsapp" style={{ color: '#22c55e' }}></i>
                <span>+91 85211 79540</span>
              </a>
              <a href={`mailto:${personalInfo.email}`} className="footer-contact-item">
                <i className="fas fa-envelope" style={{ color: '#38bdf8' }}></i>
                <span>{personalInfo.email}</span>
              </a>
              <div className="footer-contact-item">
                <i className="fas fa-location-dot" style={{ color: '#10b981' }}></i>
                <span>Faridabad, NCR / Bihar, India</span>
              </div>
            </div>

            <div className="footer-social-row">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                title="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                title="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn wa"
                title="WhatsApp"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="footer-bottom-bar">
          <div className="footer-copy-text">
            <span>&copy; {new Date().getFullYear()} <strong>{personalInfo.name}</strong>. Built with React &amp; Vite.</span>
            <span className="footer-dot-sep">•</span>
            <span>Crafted with pride &amp; passion from Bihar, India 🇮🇳</span>
            <span className="footer-dot-sep">•</span>
            <span className="footer-work-badge">
              <i className="fas fa-briefcase"></i> Working at <strong className="highlight-company">Mineib Creative Technology</strong>
            </span>
          </div>

          <button onClick={scrollToTop} className="btn-back-to-top" title="Back to top">
            <span>Back to Top</span>
            <i className="fas fa-arrow-up"></i>
          </button>
        </div>
      </div>
    </footer>
  );
}
