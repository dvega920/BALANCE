// const router = require('express').Router();
const db = require("../models")

module.exports = function (router) {
    router.get('/api', function (req, res) {
        db.Mood.findAll({})
            .then(function (dbMoods) {
                res.json(dbMoods)
                // console.log(dbMoods);
            })
    });
}
