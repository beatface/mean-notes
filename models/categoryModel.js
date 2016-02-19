"use strict";

const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: String,
    description: String,
    notes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'notes'
    }]
});

const Category = mongoose.model('categories', schema);

module.exports.model = Category;

module.exports.index = (req, res) => {
    Category.find({}, (err, categories) => {
        if (err) throw err;
        res.render('category-index', {categories: categories});
    });
};

module.exports.create = (req, res) => {
    Category.create(req.body, (err) => {
        if (err) throw err;
        res.redirect('/categories');
    });
};

module.exports.new = (req, res) => {
    res.render('category-new');
};
