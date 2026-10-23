import React, { useState } from 'react';
import { contactChannels, personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Full-Stack Web App (PHP/MERN)',
    message: ''
  });

  const [copiedKey, setCopiedKey] = useState(null);
  const [sentNotice, setSentNotice] = useState(false);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = encodeURIComponent(
      `Hi Yugesh,\n\nName: ${formData.name}\nEmail: ${formData.email}${
        formData.phone ? `\nPhone: ${formData.phone}` : ''
      }\nService: ${formData.service}\n\nProject Brief:\n${formData.message}`
    );
    const waLink = `https://wa.me/918521179540?text=${query}`;

    setSentNotice(true);
    setTimeout(() => {
      window.open(waLink, '_blank');
    }, 400);
  };

  const getChannelIcon = (type) => {
    switch (type) {
      case 'whatsapp':
        return 'fab fa-whatsapp';
      case 'phone':
        return 'fas fa-phone';
      case 'email':
      case 'email-alt':
        return 'fas fa-envelope';
      case 'linkedin':
        return 'fab fa-linkedin-in';
      case 'instagram':
        return 'fab fa-instagram';
      case 'location':
        return 'fas fa-location-dot';
      default:
        return 'fas fa-paper-plane';
    }
  };

  return (
    <section id="contact" className="bento-section">
      <div className="container">
        {/* Section Header */}
        <div className="bento-section-head">
          <div>
            <div className="head-eyebrow">
              <i className="fas fa-envelope"></i> Get In Touch
            </div>
            <h2 className="head-title">Start A Conversation</h2>
          </div>
          <p className="head-desc">
            Have a project in mind, need dedicated development support, or want to discuss a full-time
            opportunity? Reach out anytime.
          </p>
        </div>

        <div className="contact-console-grid">
          {/* Left: Direct Contact Information */}
          <div className="contact-channels-card">
            <h3>Contact Channels</h3>
            <p>Connect with me directly via Phone, WhatsApp, or Email for swift turnaround.</p>

            <div className="channel-actions-list">
              {contactChannels.map((ch, idx) => (
                <div className="channel-click-row" key={idx}>
                  <div className="channel-info-left">
                    <div
                      className="channel-avatar-icon"
                      style={{
                        background: `${ch.accent}20`,
                        color: ch.accent
                      }}
                    >
                      <i className={getChannelIcon(ch.type)}></i>
                    </div>
                    <div className="channel-info-text">
                      <small>{ch.title}</small>
                      <span>{ch.value}</span>
                    </div>
                  </div>

                  {ch.href ? (
                    <a
                      href={ch.href}
                      target={ch.href.startsWith('http') ? '_blank' : undefined}
                      rel={ch.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="channel-copy-btn"
                    >
                      {ch.type === 'whatsapp' ? 'WhatsApp' : 'Open'}
                    </a>
                  ) : (
                    <button
                      className="channel-copy-btn"
                      onClick={() => handleCopy(ch.value, idx)}
                    >
                      {copiedKey === idx ? 'Copied!' : 'Copy'}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Social Networks */}
            <h5
              style={{
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginTop: '24px',
                marginBottom: '12px'
              }}
            >
              Social &amp; Professional Networks
            </h5>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-bento-glass"
                title="GitHub"
              >
                <i className="fab fa-github"></i> GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-bento-glass"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-bento-glass"
                title="Instagram"
              >
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </div>

          {/* Right: Clean, Beautiful Project Inquiry Form */}
          <div className="contact-form-card">
            <div className="form-header-badge">
              <i className="fas fa-paper-plane"></i>
              <span>Direct WhatsApp Inquiry</span>
            </div>
            <h3>Send a Message</h3>
            <p>Fill out the details below. It will open directly in WhatsApp with your message pre-formatted.</p>

            <form onSubmit={handleSubmit} className="contact-project-form">
              <div className="console-input-row">
                <div className="console-input-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="console-input-group">
                  <label htmlFor="email">Your Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="e.g. rahul@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="console-input-row">
                <div className="console-input-group">
                  <label htmlFor="phone">Phone / WhatsApp Number</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="console-input-group">
                  <label htmlFor="service">Service Required</label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="Full-Stack Web App (PHP/MERN)">Full-Stack Web App (PHP/MERN)</option>
                    <option value="Flutter Mobile App Development">Flutter Mobile App Development</option>
                    <option value="E-Commerce & Payment Integration">E-Commerce &amp; Payment Gateway</option>
                    <option value="Custom Admin Panel / SaaS Portal">Custom Admin Panel / SaaS Portal</option>
                    <option value="Technical SEO & Performance">Technical SEO &amp; Performance</option>
                    <option value="Full-Time / Freelance Hiring">Full-Time / Freelance Hiring</option>
                  </select>
                </div>
              </div>

              <div className="console-input-group">
                <label htmlFor="message">Project Requirements / Brief *</label>
                <textarea
                  id="message"
                  rows="4"
                  required
                  placeholder="Describe your project scope, features, timeline, and requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn-console-submit">
                <i className="fab fa-whatsapp" style={{ fontSize: '1.1rem' }}></i>
                <span>Send Inquiry via WhatsApp</span>
              </button>

              {sentNotice && (
                <div className="form-success-banner">
                  <i className="fas fa-check-circle"></i>
                  <span>Opening WhatsApp with your project inquiry...</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
