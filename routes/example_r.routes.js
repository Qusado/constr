module.exports = app => {
    const db = require('../models');
    const exp = require('../controllers/example_r.controller.js');
    var router = require("express").Router();
    const config = require('config');


    router.get("/", exp.findAll);
    router.get("/by_report/:by_report_id", exp.ViewByOne);



    app.use("/api/exampler", router);
};
