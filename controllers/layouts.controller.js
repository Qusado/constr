const db = require("../models");
const Layouts = db.Layouts;
const Op = db.Sequelize.Op;
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const {validationResult} = require('express-validator');


exports.one = async (req, res) =>{
    try {
        const id_layout = req.params.id_layout;
        await Layouts.findByPk(id_layout).then(response => {
            res.send(response);
        }).catch(err => {
            res.status(500).send({
                message: "Error retrieving with id=" + {id_layout}
            });
        });
    }  catch (e)
    { res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })}
};

exports.addLayout = async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректный данные при добавлении',
            })
        }
        const layout = {
            menu_id: req.body.menu_id,
            filter_id: req.body.filter_id,
            kpi_id: req.body.kpi_id,
            visual_id: req.body.visual_id,
            report_id: req.body.report_id,
            graph1_id: req.body.g1,
            graph1_title: req.body.g1_title,
            graph2_id: req.body.g2,
            graph2_title: req.body.g2_title,
            graph3_id: req.body.g3,
            graph3_title: req.body.g3_title,
            graph4_id: req.body.g4,
            graph4_title: req.body.g4_title,
            graph5_id: req.body.g5,
            graph5_title: req.body.g5_title,
            graph6_id: req.body.g6,
            graph6_title: req.body.g6_title,
        };
        Layouts.create(layout).then(
            data => {
                const new_id = data;
                return res.status(201).json({message:"Создан макет", current_layout: {new_id}});
            });

    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }

};






