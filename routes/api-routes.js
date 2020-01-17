const router = require('express').Router();
const db = require('../models');

router.get('/moods', (req, res) => {
  db.Mood.findAll({})
    .then((dbMoods) => {
      res.json(dbMoods);
    });
});
router.post('/moods', (req, res) => {
    db.Mood.create({
        emotion: "Sad",
        rating: "1"
  })
    .then((dbMoods) => {
      res.json(dbMoods);
    });
});

module.exports = router;
