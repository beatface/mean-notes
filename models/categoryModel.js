"use strict";

const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: String,
    description: String
});

const Category = mongoose.model('Categories', schema);

module.exports.index = (req, res) => {
    Category.find({}, (err, categories) => {
        if (err) throw err;
        res.render('category-index', {categories: categories});
    })
};

module.exports.create = (req, res) => {
    Category.create(req.body, (err) => {
        if (err) throw err;
        res.send(req.body);
    })
};

module.exports.new = (req, res) => {
    res.render('category-new');
};
