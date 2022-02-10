module.exports = (sequelize, Sequelize) => {
    const Constructor_KPI = sequelize.define("constructor_kpis", {
        id_constructor_kpi:{
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
        layout_code: {
            type: Sequelize.STRING
        },
        layout_img: {
            type: Sequelize.STRING
        },

    });

    return Constructor_KPI;
};
