/* Load modules */
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
/* Database configuration */
const database = require('./app/config/dbconfig');

/* helmet protects against well known vulnerabilities */
app.use(helmet());

app.use(morgan('combine'));
app.use(bodyParser.json());
app.use(cors());



/* Init database */
database.init();



/* Init server listening */
const port = process.argv[2] || 3000;
app.listen(port, function () {
    console.log("Server listening on port : " + port);
});

/* Express configuration */
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/* Router configuration */
const REST_API_ROOT = '/api';
app.use(REST_API_ROOT, require('./app/routes/Router'));

//process.env.NODE_ENV = 'production';

