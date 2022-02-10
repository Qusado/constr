module.exports = (sequelize, Sequelize) => {
    const Constructor_filter = sequelize.define("constructor_filters", {
        id_constructor_filter:{
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

    return Constructor_filter;
};
