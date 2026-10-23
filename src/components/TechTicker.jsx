import React from 'react';
import { tickerItems } from '../data/portfolioData';

export default function TechTicker() {
  const getIconClass = (iconName) => {
    switch (iconName) {
      case 'code':
        return 'fas fa-code';
      case 'database':
        return 'fas fa-database';
      case 'atom':
        return 'fab fa-react';
      case 'smartphone':
        return 'fas fa-mobile-alt';
      case 'server':
        return 'fab fa-node-js';
      case 'zap':
        return 'fas fa-bolt';
      case 'trending-up':
        return 'fas fa-chart-line';
      case 'cloud':
        return 'fab fa-aws';
      case 'git-branch':
        return 'fab fa-git-alt';
      default:
        return 'fas fa-check';
    }
  };

  const loop = [...tickerItems, ...tickerItems];

  return (
    <div className="studio-ticker-wrap">
      <div className="studio-ticker-track">
        {loop.map((item, index) => (
          <React.Fragment key={index}>
            <div className="ticker-chip">
              <i className={getIconClass(item.icon)}></i>
              <span>{item.label}</span>
            </div>
            <div className="ticker-dot-divider"></div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
