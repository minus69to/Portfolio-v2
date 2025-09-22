import React from 'react';

function Resume({ socialLinks }) {
  return (
    <div className="resume-section">
      <h2>Resume</h2>
      <div className="resume-content">
        <p className="content-text">
          Download my resume to learn more about my background, skills, and experience.
        </p>
        
        <div className="resume-actions">
          {socialLinks?.resume ? (
            <a 
              href={socialLinks.resume} 
              download 
              className="resume-download-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              📄 Download Resume (PDF)
            </a>
          ) : (
            <div className="resume-placeholder">
              Resume will be available for download soon.
            </div>
          )}
        </div>

        <div className="contact-info">
          <h3>Contact Information</h3>
          <div className="contact-links">
            {socialLinks?.linkedin && (
              <a 
                href={socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link linkedin"
              >
                🔗 LinkedIn Profile
              </a>
            )}
            {socialLinks?.github && (
              <a 
                href={socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link github"
              >
                💻 GitHub Profile
              </a>
            )}
            {socialLinks?.googleScholar && (
              <a 
                href={socialLinks.googleScholar} 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link scholar"
              >
                🎓 Google Scholar
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;