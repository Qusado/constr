module.exports = app => {
    const db = require("../models");
    const users = require("../controllers/users.controller.js");
    const {body} = require('express-validator');
    const {check} = require('express-validator');
    const auth = require('../middleware/auth.mid.js')
    var router = require("express").Router();


    router.post("/register",
        [
            check('email', 'Некорректный email').isEmail(),
            check('password', 'Минимальная длина пароля 6 символов').isLength({ min: 6 })
        ],
        users.reg);

    router.post("/login",
        [
            check('email', 'Некорректный email').isEmail(),
            check('password', 'Минимальная длина пароля 6 символов').isLength({ min: 6 })
        ],users.login);

    router.get("/:id_user", users.one)
    //  router.post("/logout", persons.logout);
    //  router.get("/refresh", persons.refresh);

    app.use("/api/users", router);
};
