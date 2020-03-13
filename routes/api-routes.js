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

router.get("/physicians", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Physician.findAll({
        include: [db.Patient]
    }).then(function (dbPhysician) {
        console.log("Physician info!")
        // We have access to the todos as an argument inside of the callback function
        res.json(dbPhysician);
    });
});

// Get :id
router.get("/physicians/:id", function (req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Physician.findOne({
        where: {
            id: req.params.id
        },
        include: [db.Patient]
    }).then(function (dbPhysician) {
        res.json(dbPhysician);
    });
});


// Put 

router.put("/physicians/:id", function (req, res) {

    console.log(req.body);
    // res.send(req.params.id);

    db.Physician.update({
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        physician_email: req.body.physician_email,
        phone: req.body.phone,
        patients: req.body.patients
    }, {
        where: {
            id: req.params.id
        },
        include: [db.Patient]
    }).then(function (dbPhysician) {
        res.json(dbPhysician);
    });
});





// Patient
// GET route for getting all of the patient

router.get("/patients", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Patient.findAll({
        include: [db.Physician]
    }).then(function (dbPatient) {
        console.log("Patient info!")
        // We have access to the todos as an argument inside of the callback function
        res.json(dbPatient);
    });
});

// Start copy paste 


// Get :id
router.get("/patients/:id", function (req, res) {

    db.Patient.findOne({
        where: {
            id: req.params.id
        },
        include: [db.Physician]
    }).then(function (dbPatient) {
        res.json(dbPatient);
    });
});


// Put 

router.put("/patients/:id", function (req, res) {

    console.log(req.body);


    db.Patient.update({
        patient_name: req.body.patient_name,
        age: req.body.age,
        patient_email: req.body.physician_email,
        phone: req.body.phone,
        physician: req.body.physician
    }, {
        where: {
            id: req.params.id
        },
        include: [db.Physician]
    }).then(function (dbPatient) {
        res.json(dbPatient);
    });
});
// End copy paste 


// Get :id

// // Get route for retrieving a single patient
// router.get("/api/patient/:id", function (req, res) {
//     // Here we add an "include" property to our options in our findOne query
//     // We set the value to an array of the models we want to include in a left outer join
//     // In this case, just db.Author
//     db.Patient.findOne({
//         where: {
//             id: req.params.id
//         },
//         include: [db.Patient]
//     }).then(function (dbPatient) {
//         res.json(dbPatient);
//     });
// });


// Post
// router.post("/api/patient", function (req, res) {
//     db.Patient.create(req.body).then(function (dbPatient) {
//         res.json(dbPatient);
//     });
// });


// Delete
// router.delete("/api/patient/:id", function (req, res) {
//     db.Patient.destroy({
//         where: {
//             id: req.params.id
//         }
//     }).then(function (dbPatient) {
//         res.json(dbPatient);
//     });
// });


// Put
// router.put("/api/patient", function (req, res) {
//     db.Patient.update(
//         req.body,
//         {
//             where: {
//                 id: req.body.id
//             }
//         }).then(function (dbPatient) {
//             res.json(dbPatient);
//         });
// });




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
