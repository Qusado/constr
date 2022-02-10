module.exports = app => {
    const db = require('../models');
    const exp = require('../controllers/example_k.controller.js');
    var router = require("express").Router();
    const config = require('config');


    router.get("/", exp.findAll);
    router.get("/by_kpi/:by_kpi_id", exp.ViewByOne);



    app.use("/api/examplek", router);
};
