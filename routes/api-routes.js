// const router = require('express').Router();
const db = require('../models');

module.exports = function (router) {
    router.get('/api', (req, res) => {
        db.Mood.findAll({})
            .then((dbMoods) => {
                res.json(dbMoods);
                // console.log(dbMoods);
            });
    });
};
