import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Publications from './components/Publications';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Research from './components/Research';
import Awards from './components/Awards';
import Resume from './components/Resume';
import { portfolioAPI } from './services/api';
import './App.css';

function App() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [activeSection, setActiveSection] = useState('about');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await portfolioAPI.getAll();
        setPortfolioData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching portfolio data:', error);
        setError('Failed to load portfolio data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderActiveSection = () => {
    if (!portfolioData) return <div>No data available</div>;

    switch(activeSection) {
      case 'about':
        return <About aboutData={portfolioData.about} />;
      case 'publications':
        return <Publications publicationsData={portfolioData.publications} />;
      case 'researchexperience':
        return <Research researchData={portfolioData.research} />;
      case 'education':
        return <Education educationData={portfolioData.education} />;
      case 'workexperience':
        return <WorkExperience workData={portfolioData.workExperience} />;
      case 'skills':
        return <Skills skillsData={portfolioData.skills} />;
      case 'awards':
        return <Awards awardsData={portfolioData.awards} />;
      case 'resume':
        return <Resume socialLinks={portfolioData.socialLinks} />;
      default:
        return <About aboutData={portfolioData.about} />;
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!portfolioData) return <div className="error">No data available</div>;

  return (
    <div className="App">
      <Sidebar 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <div className="main-content">
        <Header personalInfo={portfolioData.personalInfo} />
        {renderActiveSection()}
      </div>
    </div>
  );
}

export default App;