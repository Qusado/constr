module.exports = app => {
    const db = require('../models');
    const theme = require('../controllers/theme.controller.js');
    var router = require("express").Router();
    const config = require('config');


    router.get("/", theme.findAll);



    app.use("/api/theme", router);
};
