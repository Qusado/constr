module.exports = app => {
    const db = require('../models');
    const ch = require('../controllers/chart.controller.js');
    var router = require("express").Router();
    const config = require('config');


    router.get("/", ch.findAll);
    router.get("/:chart_id", ch.ViewOne);
    router.get("/by_report_format/:report_id", ch.ViewByReportFormat)
    router.get("/exportReport/charts", ch.FindForReport)

    app.use("/api/chart", router);
};
