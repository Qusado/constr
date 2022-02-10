module.exports = app => {
    const db = require('../models');
    const exp = require('../controllers/example_f.controller.js');
    var router = require("express").Router();
    const config = require('config');


    router.get("/", exp.findAll);
    router.get("/by_filter/:by_filter_id", exp.ViewByOne);

    app.use("/api/examplef", router);
};
