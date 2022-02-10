module.exports = (sequelize, Sequelize) => {
    const Examples_menu = sequelize.define("examples_menus", {
        id_menu_example:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        path: {
            type: Sequelize.STRING
        },
        menu_id: {
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

    return Examples_menu;
};
