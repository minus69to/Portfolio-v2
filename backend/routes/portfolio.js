const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Debug log
console.log('Portfolio routes file loaded');

// Get all portfolio data
router.get('/', (req, res) => {
  console.log('GET /api/portfolio endpoint hit');
  try {
    const portfolioData = JSON.parse(
      fs.readFileSync(path.join(__dirname, '../data/portfolio.json'), 'utf8')
    );
    res.json(portfolioData);
  } catch (error) {
    console.error('Error reading portfolio.json:', error);
    res.status(500).json({ error: 'Failed to load portfolio data' });
  }
});

module.exports = router;