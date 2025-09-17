const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Get all portfolio data
router.get('/', (req, res) => {
  try {
    const portfolioData = JSON.parse(
      fs.readFileSync(path.join(__dirname, '../data/portfolio.json'), 'utf8')
    );
    res.json(portfolioData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load portfolio data' });
  }
});

// Get specific section
router.get('/:section', (req, res) => {
  try {
    const portfolioData = JSON.parse(
      fs.readFileSync(path.join(__dirname, '../data/portfolio.json'), 'utf8')
    );
    const section = req.params.section;
    
    if (portfolioData[section]) {
      res.json(portfolioData[section]);
    } else {
      res.status(404).json({ error: 'Section not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to load portfolio data' });
  }
});

module.exports = router;