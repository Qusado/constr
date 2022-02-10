module.exports = app => {
    const db = require('../models');
    const kpi = require('../controllers/kpi.controller.js');
    var router = require("express").Router();
    const config = require('config');


    router.get("/", kpi.findAll);
    router.get("/:id_kpi", kpi.ViewOne);




    app.use("/api/kpi", router);
};
