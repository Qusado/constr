const db = require("../models");
const Report = db.Reports;
const Op = db.Sequelize.Op;
const Sequelize = require("sequelize");
const {QueryTypes} = require('sequelize');
const config = require('config')




exports.findAll = async (req, res) => {
    Report.findAll()
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
    const id_report = req.params.report_id;
    await Report.findByPk(id_report).then(response => {
        res.send(response);
    }).catch(err => {
        res.status(500).send({
            message: "Error retrieving with id=" + {id_report}
        });
    });
};

