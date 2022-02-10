module.exports = (sequelize, Sequelize) => {
    const Examples_filter = sequelize.define("examples_filters", {
        id_filter_examples:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        path: {
            type: Sequelize.STRING
        },
        filter_id: {
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

    return Examples_filter;
};
