const router = require('express').Router();
const db = require('../models');
var moment = require('moment');

// router.post('/moods', (req, res) => {
//     db.Mood.create({
//         mood_name: req.body.mood_name,
//         rating: "1"
//     })
//         .then((dbMoods) => {
//             res.json(dbMoods);
//         });
// });

router.post('/moods', (req, res) => {
    db.Mood.create(
        req.body

    )
        .then(moods => {
            res.json(moods);
        });
    // return 
    // res.json("Test");
});

router.get('/moods', (req, res) => {
    db.Mood.findAll()
        .then(moods => {
            // create new array
            var moodEntry = [
                [], [], [], [], [], [], [], [], [], [], [], []
            ];
            // loop over all mood items
            moods.forEach((Mood) => {
                // create new variable for date - moment object - moment package 
                // var date = moment(Date);
                // const data = moment mood.created at
                const date = moment(Mood.createdAt);
                // Use moment to get month number
                const monthNumber = date.month();

                moodEntry[monthNumber].push(Mood);
                // // data.index of array - for each
                // forEach(number[0]) {
                //     // group by month number 
                //     console.log(number);
                //     moodEntry.reduce(monthNumber);
                // }
            })
            // Assistance from Instructor
            const data = [];
            moodEntry.forEach((items, index) => {
                const num = items.length;

                if (num === 0) {
                    data[index] = 0;
                    return;
                }
                console.log("num", num);

                const sum = items.reduce((total, current) => {
                    return total + current.rating;
                }, 0)

                console.log("sum", sum);

                data[index] = sum / num;

            })
            res.json(data);
            // npm install moment
            // loop over month - inside loop over items in that month - can use a reduce - array reduce javascript
        });
});













module.exports = router;
