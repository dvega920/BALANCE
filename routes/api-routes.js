const router = require('express').Router();
// const db = require('../models');

router.get('/api', (req, res) => {
    db.Mood.findAll({})
        .then((dbMoods) => {
            res.json(dbMoods);
            // console.log(dbMoods);
        });
});

module.exports = router;