import React from 'react';

function Research({ researchData }) {
  if (!researchData || researchData.length === 0) {
    return <div className="content-text">No research experience available.</div>;
  }

  return (
    <div className="research-section">
      <h2>Research Experience</h2>
      {researchData.map((research, index) => (
        <div key={index} className="research-item">
          <h3 className="research-title">{research.title}</h3>
          <p className="research-duration">{research.duration}</p>
          <p className="research-description">{research.description}</p>
          {research.technologies && research.technologies.length > 0 && (
            <div className="research-technologies">
              <strong>Technologies:</strong>
              <div className="tech-tags">
                {research.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Research;