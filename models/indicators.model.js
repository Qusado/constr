module.exports = (sequelize, Sequelize) => {
    const Indicators = sequelize.define("indicators", {
        id_indicator:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            type: Sequelize.STRING
        },
        theme_id: {
            type: Sequelize.INTEGER
        }

    });

    return Indicators;
};
