import React from 'react';

function Education({ educationData }) {
  if (!educationData || educationData.length === 0) {
    return <div className="content-text">No education information available.</div>;
  }

  return (
    <div className="education-section">
      <h2>Education</h2>
      {educationData.map((edu, index) => (
        <div key={index} className="education-item">
          <h3 className="education-degree">{edu.degree}</h3>
          <p className="education-institution">
            <strong>{edu.institution}</strong> - {edu.location}
          </p>
          <p className="education-duration">{edu.duration}</p>
          {edu.gpa && (
            <p className="education-gpa">
              <strong>GPA:</strong> {edu.gpa}
            </p>
          )}
          {edu.relevant_coursework && edu.relevant_coursework.length > 0 && (
            <p className="education-coursework">
              <strong>Relevant Coursework:</strong> {edu.relevant_coursework.join(', ')}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Education;