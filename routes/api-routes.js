const router = require('express').Router();
const db = require("../models");

router.get('/', (req, res) => res.json('Sample API get endpoint'));

router.post('/moods', (req, res) => {
    db.mood.create(
        req.body

    )
        .then(moods => {
            res.json(moods);
        });
    // return 
    // res.json("Test");
});

router.get('/moods', (req, res) => {
    db.mood.findAll(

    )
        .then(moods => {
            res.json(moods);
        });

});













module.exports = router;
