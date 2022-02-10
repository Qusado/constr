module.exports = (sequelize, Sequelize) => {
    const Constructor_visual = sequelize.define("constructor_visuals", {
        id_constructor_visual:{
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

    return Constructor_visual;
};
