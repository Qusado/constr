module.exports = (sequelize, Sequelize) => {
    const Constructor_chart = sequelize.define("constructor_charts", {
        constructor_chart:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        layout_img_variant: {
            type: Sequelize.STRING
        },
        layout_img: {
            type: Sequelize.STRING
        },

    });

    return Constructor_chart;
};
