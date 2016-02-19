"use strict";

const express = require('express');
const router = express.Router();

const Category = require('../models/categoryModel').model;
const Note = require('../models/addNoteModel').model;
const ctrl = require('../controllers/categoryCtrl');

router.param('id', (req, res, next, id) => {
    Category.findById(id, (err, category) => {
        if (err) throw err;
        req.category = category;

        Note.find({category: id}, (err, notes) => {
            if (err) throw err;
            req.category.notes = notes;
            next();
        });
    });
});

router.get('/categories', ctrl.index);
router.post('/categories', ctrl.create);
router.get('/categories/new', ctrl.new);
router.get('/categories/:id', ctrl.show);

module.exports = router;
