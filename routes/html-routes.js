const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/about.html'));
});

router.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/contact.html'));
});

router.get('/getStarted', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/getStarted.html'));
});

router.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/stats.html'));
});

// Place this route below all others to send the index.html file
// to any request that is not explicitly defined above
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;