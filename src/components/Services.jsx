import React from 'react';
import { services } from '../data/portfolioData';

export default function Services() {
  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'laptop-code':
        return 'fas fa-code';
      case 'smartphone':
        return 'fas fa-mobile-screen-button';
      case 'gauge':
        return 'fas fa-gauge-high';
      case 'shopping-cart':
        return 'fas fa-bag-shopping';
      case 'search-check':
        return 'fas fa-arrow-trend-up';
      case 'server':
        return 'fas fa-server';
      default:
        return 'fas fa-cubes';
    }
  };

  return (
    <section id="services" className="bento-section">
      <div className="container">
        <div className="bento-section-head">
          <div>
            <div className="head-eyebrow">
              <i className="fas fa-microchip"></i> Capabilities &amp; Solutions
            </div>
            <h2 className="head-title">Engineered For Growth</h2>
          </div>
          <p className="head-desc">
            From modern responsive storefronts and native mobile apps to custom administrative SaaS
            panels and search-dominating SEO.
          </p>
        </div>

        <div className="services-bento-grid">
          {services.map((srv, idx) => (
            <div className="service-bento-card" key={srv.id}>
              <div className="service-num-stamp">0{idx + 1}</div>
              <div className="service-icon-box">
                <i className={getServiceIcon(srv.icon)}></i>
              </div>

              <h3>{srv.title}</h3>
              <p>{srv.description}</p>

              <div className="service-pills-row">
                {srv.tags.map((t, i) => (
                  <span className="srv-pill" key={i}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
