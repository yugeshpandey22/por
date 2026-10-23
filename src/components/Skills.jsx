import React from 'react';
import { skillsMatrix } from '../data/portfolioData';

export default function Skills() {
  const getCatIcon = (icon) => {
    switch (icon) {
      case 'code':
        return 'fas fa-laptop-code';
      case 'server':
        return 'fas fa-database';
      case 'smartphone':
        return 'fas fa-mobile-screen-button';
      case 'cloud':
        return 'fas fa-cloud-arrow-up';
      default:
        return 'fas fa-cubes';
    }
  };

  const getTechIcon = (name) => {
    switch (name) {
      case 'React.js':
        return 'fab fa-react';
      case 'JavaScript (ES6+)':
        return 'fab fa-js';
      case 'HTML5 Semantic':
        return 'fab fa-html5';
      case 'CSS3 & Glassmorphism':
        return 'fab fa-css3-alt';
      case 'Tailwind & Bootstrap':
        return 'fab fa-bootstrap';
      case 'PHP 8.x (OOP)':
        return 'fab fa-php';
      case 'MySQL Relational':
        return 'fas fa-database';
      case 'Node.js & Express':
        return 'fab fa-node-js';
      case 'MongoDB NoSQL':
        return 'fas fa-leaf';
      case 'RESTful APIs':
        return 'fas fa-network-wired';
      case 'Flutter Framework':
        return 'fas fa-mobile-alt';
      case 'Dart Programming':
        return 'fas fa-code';
      case 'State Management':
        return 'fas fa-cubes';
      case 'Play Store Release':
        return 'fab fa-google-play';
      case 'Native API Bridges':
        return 'fas fa-plug';
      case 'Technical SEO':
        return 'fas fa-chart-line';
      case 'Git & GitHub':
        return 'fab fa-git-alt';
      case 'cPanel & Apache':
        return 'fas fa-server';
      case 'AWS Basics':
        return 'fab fa-aws';
      case 'PHPMailer & SMTP':
        return 'fas fa-envelope';
      default:
        return 'fas fa-check-circle';
    }
  };

  return (
    <section id="skills" className="bento-section">
      <div className="container">
        <div className="bento-section-head">
          <div>
            <div className="head-eyebrow">
              <i className="fas fa-layer-group"></i> Technical Toolkit
            </div>
            <h2 className="head-title">Engineered Stack</h2>
          </div>
          <p className="head-desc">
            Production-grade technologies mastered across full-stack web architectures, mobile app
            ecosystems, and high-performance server deployments.
          </p>
        </div>

        <div className="skills-radar-matrix">
          {skillsMatrix.map((col, idx) => (
            <div className="skills-column-card" key={idx}>
              <div className="column-header">
                <i className={getCatIcon(col.icon)}></i>
                <h3>{col.category}</h3>
              </div>

              <div className="skill-items-stack">
                {col.skills.map((s, i) => (
                  <div className="skill-tech-item" key={i}>
                    <div className="skill-lead">
                      <i className={getTechIcon(s.name)} style={{ color: s.color }}></i>
                      <span>{s.name}</span>
                    </div>
                    <span className="skill-tag-lvl">{s.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
