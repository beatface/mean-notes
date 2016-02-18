"use strict";

const express = require('express');
// const mongoose = require('mongoose');
const path = require('path');
// const sassMiddleware = require('node-sass-middleware');
const bodyParser = require('body-parser');
// my modules
const routes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(routes);

app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
