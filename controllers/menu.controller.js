const db = require("../models");
const Menu = db.Constructor_menu;
const Op = db.Sequelize.Op;
const Sequelize = require("sequelize");
const {QueryTypes} = require('sequelize');
const config = require('config')




exports.findAll = async (req, res) => {
    Menu.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving."
            });
        });
};

exports.ViewOne = async (req, res) =>{
    const id_menu = req.params.id_menu;
    await Menu.findByPk(id_menu).then(response => {
        res.send(response);
    }).catch(err => {
        res.status(500).send({
            message: "Error retrieving with id=" + {id_menu}
        });
    });
};

