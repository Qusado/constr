module.exports = (sequelize, Sequelize) => {
    const Examples_visual = sequelize.define("examples_visual", {
        id_visual_example:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        path: {
            type: Sequelize.STRING
        },
        visual_id: {
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

    return Examples_visual;
};
