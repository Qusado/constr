module.exports = app => {
    const db = require('../models');
    const menu = require('../controllers/menu.controller.js');
    var router = require("express").Router();
    const config = require('config');


    router.get("/", menu.findAll);
    router.get("/:id_menu", menu.ViewOne);



    app.use("/api/menu", router);
};
