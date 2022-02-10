const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    dialectOptions: {
        "ssl": {
            require: true,
            rejectUnauthorized: false
        }

    },
    // pool: {
    //     max: dbConfig.pool.max,
    //     min: dbConfig.pool.min,
    //     acquire: dbConfig.pool.acquire,
    //     idle: dbConfig.pool.idle
    // }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./users.model.js")(sequelize, Sequelize);
db.Constructor_KPI = require("./constructor_kpi.model.js")(sequelize, Sequelize);
db.Constructor_menu = require("./constructor_menu.model.js")(sequelize, Sequelize);
db.Constructor_filter = require("./constructor_filter.model.js")(sequelize, Sequelize);
db.Constructor_theme = require("./constructor_theme.model.js")(sequelize, Sequelize);
db.Constructor_visual = require("./constructor_visual.model.js")(sequelize, Sequelize);
db.Examples_visual = require("./examples_visual.model.js")(sequelize, Sequelize);
db.Examples_KPI = require("./examples_kpi.model.js")(sequelize, Sequelize);
db.Examples_filter = require("./examples_filter.model.js")(sequelize, Sequelize);
db.Examples_report = require("./examples_report.model.js")(sequelize, Sequelize);
db.Examples_menu = require("./examples_menu.model.js")(sequelize, Sequelize);
db.Examples_theme = require("./examples_theme.model.js")(sequelize, Sequelize);
db.Indicators = require("./indicators.model.js")(sequelize, Sequelize);
db.Layouts = require("./layout.model.js")(sequelize, Sequelize);
db.Reports = require("./constructor_reporting_format.model.js")(sequelize, Sequelize);
db.Report_format_charts = require("./report_format_chart.model.js")(sequelize, Sequelize);
db.Constructor_chart = require("./constructor_chart.model.js")(sequelize, Sequelize);
module.exports = db;
