const db = require("../models");
const KPI = db.Constructor_KPI;
const Op = db.Sequelize.Op;
const Sequelize = require("sequelize");
const {QueryTypes} = require('sequelize');
const config = require('config')




exports.findAll = async (req, res) => {
    KPI.findAll()
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
    const id_kpi = req.params.id_kpi;
    await KPI.findByPk(id_kpi).then(response => {
        res.send(response);
    }).catch(err => {
        res.status(500).send({
            message: "Error retrieving with id=" + {id_kpi}
        });
    });
};
