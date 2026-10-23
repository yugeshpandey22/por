import React from 'react';
import { journeyTimeline } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="bento-section">
      <div className="container">
        {/* Section Header */}
        <div className="bento-section-head">
          <div>
            <div className="head-eyebrow">
              <i className="fas fa-graduation-cap"></i> Experience &amp; Education
            </div>
            <h2 className="head-title">Background &amp; Career Journey</h2>
          </div>
          <p className="head-desc">
            A solid academic foundation in Computer Science, specialized MERN &amp; Java training,
            and real-world commercial delivery across 12+ client applications.
          </p>
        </div>

        <div className="journey-bento-wrap">
          {/* Left Column: Story Card & Verified Highlights */}
          <div className="journey-story-card">
            <h3 className="story-card-title">
              Disciplined Beginnings to Commercial Impact
            </h3>

            <p>
              Growing up with a disciplined <strong>Government High School &amp; Bihar Board (BSEB)</strong> foundation,
              I discovered early that hard work and intrinsic curiosity break through any ceiling. Moving across states
              to Gujarat, I pursued <strong>B.Tech in Computer Science &amp; Engineering at RK University (Rajkot)</strong>,
              graduating with an honors <strong>7.17 CGPA</strong>.
            </p>

            <p>
              Recognizing that modern tech evolves faster than textbooks, I honed industrial engineering skills in{' '}
              <strong>Java DSA and Full-Stack MERN</strong> with Apna College. Today, as a{' '}
              <strong>Full Stack Developer &amp; SEO Executive at Mineib Creative Technology</strong> (Faridabad, Haryana),
              I design resilient backend architectures, fluid client applications, and high-visibility SEO frameworks.
            </p>

            <p>
              Over the last 2+ years, I have engineered and deployed <strong>12+ commercial digital platforms</strong> for
              businesses spanning luxury e-commerce, industrial automation, healthcare, real estate, civil infrastructure,
              and non-profits.
            </p>

            {/* Verified Highlights Strip */}
            <div className="verified-highlights-strip">
              <div className="v-highlight-box">
                <i className="fas fa-graduation-cap"></i>
                <h5>7.17 CGPA B.Tech</h5>
                <span>RK University, Rajkot (CSE)</span>
              </div>

              <div className="v-highlight-box">
                <i className="fas fa-briefcase"></i>
                <h5>Full Stack Developer</h5>
                <span>Mineib Creative Tech (Current)</span>
              </div>

              <div className="v-highlight-box">
                <i className="fas fa-rocket"></i>
                <h5>12+ Live Projects</h5>
                <span>Production Clients Nationwide</span>
              </div>

              <div className="v-highlight-box">
                <i className="fas fa-school"></i>
                <h5>Bihar State Board</h5>
                <span>Govt High School Foundation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline Stream with Proper Styled Cards */}
          <div className="timeline-stream-wrap">
            {journeyTimeline.map((item, idx) => (
              <div className="timeline-milestone-card" key={idx}>
                {/* Milestone Node Marker */}
                <div className="milestone-marker">
                  <div className="marker-dot"></div>
                </div>

                <div className="milestone-card-inner">
                  <div className="milestone-meta-row">
                    <span className="milestone-period-badge">{item.period}</span>
                    {item.badge && (
                      <span className="milestone-status-badge">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h4 className="milestone-title">{item.title}</h4>

                  <div className="milestone-org">
                    <i className="fas fa-building"></i>
                    <span>{item.organization}</span>
                  </div>

                  <p className="milestone-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
