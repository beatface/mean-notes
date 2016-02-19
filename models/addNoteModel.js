"use strict";

const mongoose = require('mongoose');

const schema = mongoose.Schema({
    title: String,
    note: String,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories'
    }
});

const Note = mongoose.model('notes', schema);
const Category = require('./categoryModel').model;

module.exports.model = Note;

module.exports.index = (req, res) => {
    Note.find({}, (err, notes) => {
        res.render('index', {notes: notes});
    });
};

module.exports.newNote = (req, res) => {
    Category.find({}, (err, categories) => {
        res.render('addNote', {categories: categories});
    });
};

module.exports.postNote = (req, res) => {
    console.log(req.body);
    if (req.body.title === '') {
        console.log("you need to add a title");
        res.send('You need to add a title. Try again.');
    } else {
        Note.create(req.body, (err, note) => {
            if (err) throw err;
            console.log('note posted');
            res.redirect(`/notes/${note._id}`);
        });
    }
};

module.exports.showNote = (req, res) => {
    res.render('showNote', {note: req.note});
};

module.exports.destroyNote = (req, res) => {
    console.log(req.body);
    req.note.remove((err) => {
        if (err) throw err;
        res.redirect('/notes');
    });
};

module.exports.edit = (req, res) => {
    Category.find({}, (err, categories) => {
        res.render('editNote', {title: req.note.title, note: req.note.note, _id: req.note._id, categories: categories});
    });
};

module.exports.update = (req, res) => {
    console.log(req.params);
    Note.findByIdAndUpdate(req.params.id, {title: req.body.title, note: req.body.note}, (err) => {
        if (err) throw err;
        res.redirect(`/notes/${req.params.id}`);
    });
};
