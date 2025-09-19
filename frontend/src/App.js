import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import About from './components/About';
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
        {activeSection === 'about' && <About aboutData={portfolioData.about} />}
        {/* We'll add other sections later */}
      </div>
    </div>
  );
}

export default App;