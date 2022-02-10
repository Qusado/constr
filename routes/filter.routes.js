module.exports = app => {
    const db = require('../models');
    const filter = require('../controllers/filter.controller.js');
    var router = require("express").Router();
    const config = require('config');


    router.get("/", filter.findAll);
    router.get("/:filter_id", filter.ViewOne);



    app.use("/api/filter", router);
};
