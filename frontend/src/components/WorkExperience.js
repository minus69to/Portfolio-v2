import React from 'react';

function WorkExperience({ workData }) {
  if (!workData || workData.length === 0) {
    return <div className="content-text">No work experience available.</div>;
  }

  return (
    <div className="work-section">
      <h2>Work Experience</h2>
      {workData.map((job, index) => (
        <div key={index} className="work-item">
          <h3 className="work-title">{job.title}</h3>
          <p className="work-company">
            <strong>{job.company}</strong> - {job.location}
          </p>
          <p className="work-duration">{job.duration}</p>
          <p className="work-description">{job.description}</p>
          {job.technologies && job.technologies.length > 0 && (
            <p className="work-technologies">
              <strong>Technologies:</strong> {job.technologies.join(', ')}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default WorkExperience;