import React from 'react';

function Publications({ publicationsData }) {
  if (!publicationsData || publicationsData.length === 0) {
    return <div className="content-text">No publications available.</div>;
  }

  return (
    <div className="publications-section">
      <h2>Publications</h2>
      {publicationsData.map((publication, index) => (
        <div key={index} className="publication-item">
          <h3 className="publication-title">
            {publication.url ? (
              <a href={publication.url} target="_blank" rel="noopener noreferrer">
                {publication.title}
              </a>
            ) : (
              publication.title
            )}
          </h3>
          <p className="publication-authors">
            <strong>Authors:</strong> {publication.authors.join(', ')}
          </p>
          <p className="publication-venue">
            <strong>Venue:</strong> {publication.venue} ({publication.year})
          </p>
        </div>
      ))}
    </div>
  );
}

export default Publications;