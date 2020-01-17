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

// Start route for moods
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
// // End Route for moods

// // Start Route for activities



// POST route for saving a new todo
router.post("/activity", function (req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Activity.create(
        req.body

    ).then(function (dbActivity) {


        // We have access to the new todo as an argument inside of the callback function
        res.json(dbActivity);

        // console.log(data);
        // console.log(dbActivity);
    });
});

// GET route for getting all of the todos
router.get("/activity", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Activity.findAll({}).then(function (dbActivity) {
        // We have access to the todos as an argument inside of the callback function
        var activityEntry = [
            [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [],
        ];
        // loop over all mood items
        dbActivity.forEach((Activity) => {
            // create new variable for date - moment object - moment package 
            const date = moment(Activity.createdAt);
            // Use moment to get month number
            const monthNumber = date.month();

            activityEntry[monthNumber].push(Activity);

        })
        // Assistance from Instructor
        const data = [];
        activityEntry.forEach((items, index) => {
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

    });
});

// DELETE route for deleting todos. We can get the id of the todo we want to delete from
// req.params.id
// router.delete("/api/todos/:id", function (req, res) {

// });

// // PUT route for updating todos. We can get the updated todo from req.body
// router.put("/api/todos", function (req, res) {

// });



module.exports = router;
