module.exports = (sequelize, Sequelize) => {
    const Report_format_chart = sequelize.define("report_format_charts", {
        id_rep_for_ch: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        report_id: {
            type: Sequelize.INTEGER
        },
        chart_id: {
            type: Sequelize.INTEGER
        }

    });

    return Report_format_chart;
}
