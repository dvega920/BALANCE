const router = require('express').Router();
const db = require("../models");

router.get('/', (req, res) => res.json('Sample API get endpoint'));

router.get('/moods', (req, res) => {
    db.mood.findAll({
        // Query parameters
        // mood_name: req.body.mood,
        // rating: req.body.rating
    })
        .then(moods => {
            res.json(moods);
        });
    // return 
    // res.json("Test");
});


// module.exports = (sequelize, DataTypes) => {
//     const Mood = sequelize.define('mood', {
//       mood_name: DataTypes.STRING,
//       rating: DataTypes.INTEGER
//     });
//     return Mood;
//   };

// Model.findAll({
//     attributes: ['foo', 'bar']
//   });











module.exports = router;
