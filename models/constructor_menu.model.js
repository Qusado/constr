module.exports = (sequelize, Sequelize) => {
    const Constructor_menu = sequelize.define("constructor_menus", {
        id_constructor_menu:{
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

    return Constructor_menu;
};
