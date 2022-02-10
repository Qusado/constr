const db = require("../models");
const Filter = db.Constructor_filter;
const Op = db.Sequelize.Op;
const Sequelize = require("sequelize");
const {QueryTypes} = require('sequelize');
const config = require('config')




exports.findAll = async (req, res) => {
    Filter.findAll()
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
    const id_filter = req.params.filter_id;
    await Filter.findByPk(id_filter).then(response => {
        res.send(response);
    }).catch(err => {
        res.status(500).send({
            message: "Error retrieving with id=" + {id_filter}
        });
    });
};

