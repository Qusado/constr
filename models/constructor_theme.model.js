module.exports = (sequelize, Sequelize) => {
    const Constructor_theme = sequelize.define("constructor_themes", {
        id_constructor_theme:{
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
        examp: {
            type:  Sequelize.STRING
        },

    });

    return Constructor_theme;
};
