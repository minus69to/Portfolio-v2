import React from 'react';

function Header({ personalInfo }) {
  if (!personalInfo) return <div>Loading header...</div>;

  return (
    <div className="header">
      <h1 className="main-title">
        {personalInfo.name.split(' ').map((word, index) => (
          <span key={index} className={index === personalInfo.name.split(' ').length - 1 ? 'highlight' : ''}>
            {word}{' '}
          </span>
        ))}
      </h1>
      <p className="subtitle">
        {personalInfo.location} • <a href={`mailto:${personalInfo.email}`} className="email-link">{personalInfo.email}</a>
      </p>
    </div>
  );
}

export default Header;