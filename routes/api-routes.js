const router = require('express').Router();
const db = require('../models');
// npm install moment
var moment = require('moment');

// Start routes for moods
// POST Method
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
// GET Method
router.get('/moods', (req, res) => {
    db.Mood.findAll()
        .then(moods => {
            // create new array
            var moodEntry = [
                [], [], [], [], [], [], [], [], [], [], [], []
            ];
            // loop over all mood items
            moods.forEach((Mood) => {
                // New variable for date - moment object - moment package 
                const date = moment(Mood.createdAt);
                // Use moment to get month number
                const monthNumber = date.month();

                moodEntry[monthNumber].push(Mood);
                // data.index of array - for each
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

            // loop over month - inside loop over items in that month - can use a reduce - array reduce javascript
        });
});
// // End Routes for moods

// // Start Route for activities
// POST route for saving a new Activity
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

    });
});

// GET route for getting all of the activity
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




// NEW API routes

// Physician
// GET route for getting all of the physician

router.get("/physician", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Physician.findAll({}).then(function (dbPhysician) {
        console.log("Physician info!")
        // We have access to the todos as an argument inside of the callback function
        res.json(dbPhysician);
    });
});

// Get :id

// router.get("/api/physician/:id", function(req, res) {

//     db.Physician.findOne({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbPhysician) {
//       res.json(dbPhysician);
//     });
//   });

// Post

// Should this be patient?
// router.post("/api/physician", function(req, res) {

//     console.log(req.body);
//     db.Physician.create(req.body).then(function(dbPhysician) {
//       res.json(dbPhysician);
//     });
//   });


// Delete

// router.delete("/api/physician/:id", function(req, res) {

//     db.Physician.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbPhysician) {
//       res.json(dbPhysician);
//     });
//   });



// Patient
// GET route for getting all of the patient

router.get("/patient", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Patient.findAll({}).then(function (dbPatient) {
        console.log("Patient info!")
        // We have access to the todos as an argument inside of the callback function
        res.json(dbPatient);
    });
});

// Get needs Query
// GET route for getting all of the patients
//   router.get("/api/patient", function(req, res) {
//     var query = {};
// Where is "patient_id" initialized?
//     if (req.query.patient_id) {
//       query.patientId = req.query.patient_id;
//     }
//     db.Patient.findAll({
//       where: query
//     }).then(function(dbPatient) {
//       res.json(dbPatient);
//     });
//   });


// Get :id

// router.get("/api/patient/:id", function(req, res) {
//     db.Patient.findOne({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbPatient) {
//       console.log(dbPatient);
//       res.json(dbPatient);
//     });
//   });

// Post

// router.post("/api/patient", function(req, res) {
//     db.Patient.create(req.body).then(function(dbPatient) {
//       res.json(dbPatient);
//     });
//   });

// Delete

// router.delete("/api/patient/:id", function(req, res) {
//     db.Patient.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbPatient) {
//       res.json(dbPatient);
//     });
//   });

// Put

// router.put("/api/patient", function(req, res) {
//     db.Patient.update(
//       req.body,
//       {
//         where: {
//           id: req.body.id
//         }
//       }).then(function(dbPatient) {
//       res.json(dbPatient);
//     });
//   });




// Questions
// GET route for getting all of the patient

router.get("/questions", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Questions.findAll({}).then(function (dbQuestions) {
        console.log("Questionnaire!")
        // We have access to the todos as an argument inside of the callback function
        res.json(dbQuestions);
    });
});


module.exports = router;
