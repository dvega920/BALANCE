const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/about.html'));
});

router.get('/contactUs', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/contactUs.html'));
});

router.get('/track', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/track.html'));
});

router.get('/activities', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/activities.html'));
});

router.get('/reports', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/reports.html'));
});

router.get('/resources', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/resources.html'));
});


// Place this route below all others to send the index.html file
// to any request that is not explicitly defined above
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;