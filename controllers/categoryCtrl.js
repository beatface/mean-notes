"use strict";

const CategoryModel = require('../models/categoryModel.js');

module.exports.index = (req, res) => {
    CategoryModel.index(req, res);
}
module.exports.create = (req, res) => {
    CategoryModel.create(req, res);
}
module.exports.new = (req, res) => {
    CategoryModel.new(req, res);
}
