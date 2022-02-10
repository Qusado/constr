module.exports = (sequelize, Sequelize) => {
    const Examples_KPI = sequelize.define("examples_kpis", {
        id_kpi_example:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        path: {
            type: Sequelize.STRING
        },
        kpi_id: {
            type: Sequelize.INTEGER
        },
        title:{
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        url: {
            type: Sequelize.STRING
        }

    });

    return Examples_KPI;
};
