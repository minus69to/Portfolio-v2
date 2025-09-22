import React from 'react';

function Skills({ skillsData }) {
  if (!skillsData) {
    return <div className="content-text">No skills information available.</div>;
  }

  return (
    <div className="skills-section">
      <h2>Skills</h2>
      
      {skillsData.programming && skillsData.programming.length > 0 && (
        <div className="skill-category">
          <h3>Programming Languages</h3>
          <div className="skill-tags">
            {skillsData.programming.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      )}

      {skillsData.frameworks && skillsData.frameworks.length > 0 && (
        <div className="skill-category">
          <h3>Frameworks & Libraries</h3>
          <div className="skill-tags">
            {skillsData.frameworks.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      )}

      {skillsData.tools && skillsData.tools.length > 0 && (
        <div className="skill-category">
          <h3>Tools & Technologies</h3>
          <div className="skill-tags">
            {skillsData.tools.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      )}

      {skillsData.databases && skillsData.databases.length > 0 && (
        <div className="skill-category">
          <h3>Databases</h3>
          <div className="skill-tags">
            {skillsData.databases.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Skills;