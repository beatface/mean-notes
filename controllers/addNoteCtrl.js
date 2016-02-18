"use strict";

const Note = require('../models/addNoteModel');

module.exports.newNote = (req, res) => {
    res.render('addNote');
};

module.exports.postNote = (req, res) => {
    console.log(req.body);
    Note.create(req.body, (err, note) => {
        if (err) throw err;
        console.log('note posted');
        res.redirect(`/notes/${note._id}`);
    });
};

module.exports.showNote = (req, res) => {
    Note.findById(req.params.id, (err, note) => {
        if (err) throw err;

        res.render('showNote', {title: note.title, note: note.note});
    });
};