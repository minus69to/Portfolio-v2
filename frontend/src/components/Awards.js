import React from 'react';

function Awards({ awardsData }) {
  if (!awardsData || awardsData.length === 0) {
    return <div className="content-text">No awards available.</div>;
  }

  return (
    <div className="awards-section">
      <h2>Awards & Achievements</h2>
      {awardsData.map((award, index) => (
        <div key={index} className="award-item">
          <h3 className="award-title">{award.title}</h3>
          <p className="award-organization">
            <strong>{award.organization}</strong> - {award.year}
          </p>
          {award.description && (
            <p className="award-description">{award.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Awards;