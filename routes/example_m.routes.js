module.exports = app => {
    const db = require('../models');
    const exp = require('../controllers/example_m.controller.js');
    var router = require("express").Router();
    const config = require('config');


    router.get("/", exp.findAll);
    router.get("/by_menu/:by_menu_id", exp.ViewByOne);



    app.use("/api/examplem", router);
};
