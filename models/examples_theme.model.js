module.exports = (sequelize, Sequelize) => {
    const Examples_theme = sequelize.define("examples_theme", {
        id_theme_example:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        path: {
            type: Sequelize.STRING
        },
        theme_id: {
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

    return Examples_theme;
};
