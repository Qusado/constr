const db = require("../models");
const Charts = db.Constructor_chart;
const Op = db.Sequelize.Op;
const Sequelize = require("sequelize");
const {QueryTypes} = require('sequelize');
const config = require('config')




exports.findAll = async (req, res) => {

    Charts.findAll()
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

    const id_chart = req.params.chart_id;
    await Charts.findByPk(id_chart).then(response => {
        res.send(response);
    }).catch(err => {
        res.status(500).send({
            message: "Error retrieving with id=" + {id_chart}
        });
    });
};

exports.ViewByReportFormat = async (req, res) =>{

    const report_id = req.params.report_id;
    await db.sequelize.query(`SELECT * FROM constructor_charts WHERE constructor_chart IN(SELECT chart_id FROM report_format_charts WHERE report_id = ${report_id})`,
        {
            replacements: { report_id: report_id },
            type: QueryTypes.SELECT
        }).then(results => {
        res.send(results);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving."
        });
    });
};

exports.FindForReport = async (req, res) =>{
    const g1 = req.query.g1;
    const g2 = req.query.g2;
    const g3 = req.query.g3;
    const g4 = req.query.g4;
    const g5 = req.query.g5;
    const g6 = req.query.g6;
    const ar = [g1, g2, g3, g4, g5, g6];
    var filtered = ar.filter(function (el) {
        return Number(el);
    });
    await db.sequelize.query(`SELECT * FROM constructor_charts WHERE constructor_chart IN (${filtered})`,
        {
            replacements: { filtered: filtered },
            type: QueryTypes.SELECT
        }).then(results => {
        res.send(results);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving."
        });
    });
};
