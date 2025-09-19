import React from 'react';

function About({ aboutData }) {
  if (!aboutData) return <div>Loading about section...</div>;

  return (
    <div className="about-section">
      <p className="content-text">{aboutData.description}</p>
      
      {aboutData.currentPosition && (
        <p className="content-text">
          <strong>Current Position:</strong> {aboutData.currentPosition}
        </p>
      )}
      
      {aboutData.personalInterests && (
        <p className="content-text">{aboutData.personalInterests}</p>
      )}
      
      <div className="social-links">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
      </div>
    </div>
  );
}

export default About;