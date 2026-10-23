import React, { useState, useMemo } from 'react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [inspectProject, setInspectProject] = useState(null);

  const allProjects = useMemo(() => Object.values(projectsData), []);

  const filteredProjects = useMemo(() => {
    return allProjects.filter((p) => {
      const matchCategory = activeCategory === 'all' || p.categoryType === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.techStack.some((t) => t.toLowerCase().includes(q));

      return matchCategory && matchSearch;
    });
  }, [allProjects, activeCategory, searchQuery]);

  const getCleanDomain = (proj) => {
    if (proj.categoryType === 'app') return 'addika-app (Flutter & Dart)';
    if (proj.liveUrl && proj.liveUrl !== '#') {
      try {
        const url = new URL(proj.liveUrl);
        return url.hostname.replace('www.', '');
      } catch {
        return proj.liveUrl;
      }
    }
    return `github.com/yugeshpandey22/${proj.id}`;
  };

  return (
    <section id="projects" className="bento-section">
      <div className="container">
        {/* Section Header */}
        <div className="bento-section-head">
          <div>
            <div className="head-eyebrow">
              <i className="fas fa-cubes-stacked"></i> Commercial Portfolio
            </div>
            <h2 className="head-title">Featured Production Works</h2>
          </div>
          <p className="head-desc">
            Explore 12+ authentic commercial digital platforms, e-commerce storefronts, Flutter apps,
            and enterprise portals delivered to real-world clients.
          </p>
        </div>

        {/* Controls Bar: Category Pills + Live Search */}
        <div className="projects-controls-bar">
          <div className="category-tab-pills">
            <button
              className={`cat-tab-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All (12)
            </button>
            <button
              className={`cat-tab-btn ${activeCategory === 'live' ? 'active' : ''}`}
              onClick={() => setActiveCategory('live')}
            >
              Commercial Web (9)
            </button>
            <button
              className={`cat-tab-btn ${activeCategory === 'app' ? 'active' : ''}`}
              onClick={() => setActiveCategory('app')}
            >
              Flutter App (1)
            </button>
            <button
              className={`cat-tab-btn ${activeCategory === 'clones' ? 'active' : ''}`}
              onClick={() => setActiveCategory('clones')}
            >
              Fintech &amp; SaaS (2)
            </button>
          </div>

          <div className="project-search-box">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search by tech, name, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
              >
                <i className="fas fa-times"></i>
              </button>
            )}
          </div>
        </div>

        {/* Real Browser Window Mockup Grid (Compact 3-Column Proportions) */}
        <div className="browser-mockup-grid">
          {filteredProjects.map((proj) => {
            const isFlutterApp = proj.categoryType === 'app';
            const domain = getCleanDomain(proj);

            return (
              <div className="browser-window-card" key={proj.id}>
                {/* macOS Style Window Titlebar */}
                <div className="browser-titlebar">
                  <div className="browser-controls-dots">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                  </div>

                  {proj.liveUrl && proj.liveUrl !== '#' ? (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="browser-address-bar"
                      title={`Open ${proj.liveUrl}`}
                    >
                      <i className="fas fa-lock lock-icon"></i>
                      <span className="address-text">{domain}</span>
                    </a>
                  ) : (
                    <div className="browser-address-bar" title={domain}>
                      <i className="fas fa-lock lock-icon"></i>
                      <span className="address-text">{domain}</span>
                    </div>
                  )}

                  <div className="browser-status-chip">
                    <span className={`status-led ${proj.categoryType}`}></span>
                    <span>
                      {proj.categoryType === 'live'
                        ? 'LIVE'
                        : proj.categoryType === 'app'
                        ? 'APP'
                        : 'MERN'}
                    </span>
                  </div>
                </div>

                {/* Browser Viewport Area (Compact) */}
                <div className={`browser-viewport ${isFlutterApp ? 'viewport-flutter' : ''}`}>
                  {isFlutterApp && proj.secondaryImage ? (
                    <div className="flutter-phone-dual">
                      <img
                        src={proj.image}
                        alt="App Screen 1"
                        className="flutter-phone-shot"
                        loading="lazy"
                        decoding="async"
                        width="200"
                        height="400"
                      />
                      <img
                        src={proj.secondaryImage}
                        alt="App Screen 2"
                        className="flutter-phone-shot"
                        loading="lazy"
                        decoding="async"
                        width="200"
                        height="400"
                      />
                    </div>
                  ) : (
                    <div className="browser-image-box">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        loading="lazy"
                        decoding="async"
                        width="500"
                        height="300"
                      />
                      {proj.liveUrl && proj.liveUrl !== '#' && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="viewport-quick-launch"
                          title="Open Live Website"
                        >
                          <i className="fas fa-arrow-up-right-from-square"></i>
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Project Details Content (Compact & Balanced) */}
                <div className="browser-card-content">
                  <div className="card-top-meta">
                    <span className="project-category-badge">{proj.category}</span>
                    <span className="project-badge-tag">{proj.badge}</span>
                  </div>

                  <h3 className="project-window-title">
                    {proj.liveUrl && proj.liveUrl !== '#' ? (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-title-link"
                      >
                        {proj.title} <i className="fas fa-arrow-up-right-from-square title-ext-icon"></i>
                      </a>
                    ) : (
                      proj.title
                    )}
                  </h3>

                  <p className="project-window-desc">{proj.description}</p>

                  {/* Delivered Feature Highlights */}
                  {proj.features && proj.features.length > 0 && (
                    <div className="project-key-bullets">
                      {proj.features.slice(0, 2).map((feat, i) => (
                        <div className="key-bullet-row" key={i}>
                          <i className="fas fa-circle-check"></i>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="project-tech-ribbon">
                    {proj.techStack.slice(0, 3).map((tech, i) => (
                      <span className="tech-badge-item" key={i}>
                        {tech}
                      </span>
                    ))}
                    {proj.techStack.length > 3 && (
                      <span className="tech-badge-more">+{proj.techStack.length - 3}</span>
                    )}
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="browser-card-actions">
                    {proj.liveUrl && proj.liveUrl !== '#' ? (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-launch-website"
                      >
                        <span>{isFlutterApp ? 'Brand Web' : 'Visit Live'}</span>
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    ) : (
                      <button
                        className="btn-launch-website"
                        onClick={() => setInspectProject(proj)}
                      >
                        <span>Overview</span>
                        <i className="fas fa-chart-simple"></i>
                      </button>
                    )}

                    {proj.altLiveUrl && (
                      <a
                        href={proj.altLiveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-inspect-specs btn-alt-link"
                        title="Alternate Storefront (adikka.com)"
                      >
                        <span>adikka.com</span>
                      </a>
                    )}

                    <button
                      className="btn-inspect-specs"
                      onClick={() => setInspectProject(proj)}
                    >
                      <span>Specs</span>
                      <i className="fas fa-sliders"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Inspection Modal */}
      {inspectProject && (
        <ProjectModal
          project={inspectProject}
          onClose={() => setInspectProject(null)}
        />
      )}
    </section>
  );
}
