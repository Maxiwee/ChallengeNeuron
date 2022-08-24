const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

const routes = require('./routes');

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(morgan('dev'));

app.use(routes);

module.exports = app;
