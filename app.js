const express = require('express');
const config = require('config')
const db = require("./models");
const cors = require("cors");
const fileUpload = require('express-fileupload');
const path = require('path')
const bodyParser = require('body-parser');
const pdf = require('html-pdf');

const app = express()
db.sequelize.sync();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



const PORT = config.get('PORT') || 5000
app.use(express.json({ extended: true }))
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
require("./routes/users.routes.js")(app);
require("./routes/kpi.routes.js")(app);
require("./routes/theme.routes.js")(app);
require("./routes/menu.routes.js")(app);
require("./routes/layout.routes.js")(app);
require("./routes/filter.routes.js")(app);
require("./routes/visual.routes.js")(app);
require("./routes/example_m.routes.js")(app);
require("./routes/example_f.routes.js")(app);
require("./routes/example_k.routes.js")(app);
require("./routes/example_v.routes.js")(app);
require("./routes/example_r.routes.js")(app);
require("./routes/report.routes.js")(app);
require("./routes/chart.routes.js")(app);
require("./routes/pdf.routes.js")(app);




async function start() {
    try {
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    } catch(e) {
        console.log('Server error', e.message)
        process.exit(1)
    }
}

start();
