"use strict";

const mongoose = require('mongoose');

const schema = mongoose.Schema({
    title: String,
    note: String
});

module.exports = mongoose.model('Notes', schema);
