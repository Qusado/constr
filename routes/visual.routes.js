module.exports = app => {
    const db = require('../models');
    const visual = require('../controllers/visual.controller.js');
    var router = require("express").Router();
    const config = require('config');


    router.get("/", visual.findAll);
    router.get("/:visual_id", visual.ViewOne);



    app.use("/api/visual", router);
};
