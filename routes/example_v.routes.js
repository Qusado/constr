module.exports = app => {
    const db = require('../models');
    const exp = require('../controllers/example_v.controller.js');
    var router = require("express").Router();
    const config = require('config');


    router.get("/", exp.findAll);
    router.get("/by_visual/:by_visual_id", exp.ViewByOne);



    app.use("/api/examplev", router);
};
