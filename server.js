"use strict";

const express = require('express');
// const mongoose = require('mongoose');
// const sassMiddleware = require('node-sass-middleware');
// const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send('Awwww, yeahhhhhhhhhhh!!!!');
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
