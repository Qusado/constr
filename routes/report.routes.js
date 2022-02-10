module.exports = app => {
    const db = require('../models');
    const rep = require('../controllers/report.controller.js');
    var router = require("express").Router();
    const config = require('config');


    router.get("/", rep.findAll);
    router.get("/:report_id", rep.ViewOne);



    app.use("/api/report", router);
};
