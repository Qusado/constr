module.exports = (sequelize, Sequelize) => {
    const Constructor_reporting_format = sequelize.define("constructor_reporting_formats", {
        id_reporting_format:{
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

    });

    return Constructor_reporting_format;
};
