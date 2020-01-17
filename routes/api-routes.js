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
            // create new array
            // loop over all mood items
            // create new variable for date - moment object - moment package 
            // const data = moment mood.created at
            // Use moment to get month number
            // data.index of array - for each
            // npm install moment
            // group by month number 
            // loop over month - inside loop over items in that month - can use a reduce - array reduce javascript


        });

});













module.exports = router;
