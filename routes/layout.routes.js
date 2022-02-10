module.exports = app => {
    const db = require("../models");
    const layouts = require("../controllers/layouts.controller.js");
    const {body} = require('express-validator');
    const {check} = require('express-validator');
    const auth = require('../middleware/auth.mid.js')
    var router = require("express").Router();


    router.post("/",
        [
            check('menu_id', 'Некорректный email').isLength({min:1}),
            check('filter_id', 'Некорректный email').isLength({min:1}),
            check('kpi_id', 'Некорректный email').isLength({min:1}),
            check('visual_id', 'Некорректный email').isLength({min:1}),
            check('report_id', 'Некорректный email').isLength({min:1})
        ],
        layouts.addLayout);
    router.get("/:layout_id", layouts.one);

    app.use("/api/layout", router);
};
