module.exports = (sequelize, Sequelize) => {
    const Layouts = sequelize.define("layouts", {
        id_layout:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: Sequelize.INTEGER
        },
        theme_id: {
            type: Sequelize.INTEGER
        },
        menu_id: {
            type: Sequelize.INTEGER
        },
        filter_id: {
            type: Sequelize.INTEGER
        },
        kpi_id: {
            type: Sequelize.INTEGER
        },
        visual_id:{
            type: Sequelize.INTEGER
        },
        indicators1_id: {
            type: Sequelize.INTEGER
        },
        indicators2_id: {
            type: Sequelize.INTEGER
        },
        indicators3_id: {
            type: Sequelize.INTEGER
        },
        indicators4_id: {
            type: Sequelize.INTEGER
        },
        indicators5_id: {
            type: Sequelize.INTEGER
        },
        indicators6_id: {
            type: Sequelize.INTEGER
        },
        img_layout: {
            type: Sequelize.STRING
        },
        graph1_id: {
            type: Sequelize.INTEGER
        },
        graph1_title: {
            type: Sequelize.STRING
        },
        graph2_id: {
            type: Sequelize.INTEGER
        },
        graph2_title: {
            type: Sequelize.STRING
        },
        graph3_id: {
            type: Sequelize.INTEGER
        },
        graph3_title: {
            type: Sequelize.STRING
        },
        graph4_id: {
            type: Sequelize.INTEGER
        },
        graph4_title: {
            type: Sequelize.STRING
        },
        graph5_id: {
            type: Sequelize.INTEGER
        },
        graph5_title: {
            type: Sequelize.STRING
        },
        graph6_id: {
            type: Sequelize.INTEGER
        },
        graph6_title: {
            type: Sequelize.STRING
        },
        report_format_id:{
            type: Sequelize.INTEGER
        }
    });

    return Layouts;
};
