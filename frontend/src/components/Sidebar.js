import React from 'react';

function Sidebar({ activeSection, setActiveSection }) {
  const sections = [
    'About',
    'Publications', 
    'Research Experience',
    'Education',
    'Work Experience',
    'Skills',
    'Awards',
    'Resume'
  ];

  return (
    <div className="sidebar">
      <div className="profile-section">
        <img 
          src="/images/profile.jpg" 
          alt="Profile" 
          className="profile-image"
          onError={(e) => {e.target.src = 'https://via.placeholder.com/150x150?text=Photo'}}
        />
      </div>
      <nav className="nav-menu">
        {sections.map((section) => (
          <div
            key={section}
            className={`nav-item ${activeSection === section.toLowerCase().replace(' ', '') ? 'active' : ''}`}
            onClick={() => setActiveSection(section.toLowerCase().replace(' ', ''))}
          >
            {section}
          </div>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;