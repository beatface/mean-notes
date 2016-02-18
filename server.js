"use strict";

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const sassMiddleware = require('node-sass-middleware');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
// my modules
const routes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(routes);

// compile sass
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true,
  sourceMap: true
}));

mongoose.connect('mongodb://localhost:27017/mean-notes');
const database = mongoose.connection;
database.on('open', (err) => {
    if (err) throw err;
    app.listen(PORT, () => {
        console.log(`Listening on port: ${PORT}`);
    });
});
