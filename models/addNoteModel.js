"use strict";

const mongoose = require('mongoose');

const schema = mongoose.Schema({
    title: String,
    note: String
});

const Note = mongoose.model('Notes', schema);

module.exports = {
    index (req, res) {
        Note.find({}, (err, notes) => {
            res.render('index', {notes: notes});
        });
    },

    postNote (req, res) {
        console.log(req.body);
        Note.create(req.body, (err, note) => {
            if (err) throw err;
            console.log('note posted');
            res.redirect(`/notes/${note._id}`);
        });
    },

    showNote (req, res) {
        Note.findById(req.params.id, (err, note) => {
            if (err) throw err;
            console.log(note._id);
            res.render('showNote', {title: note.title, note: note.note, _id: note._id});
        });
    },

    destroyNote (req, res) {
        console.log(req.body);
        Note.findByIdAndRemove(req.params.id, (err) => {
            if (err) throw err;
            res.redirect('/notes');
        });
    },

    edit (req, res) {
        Note.findById(req.params.id, (err, note) => {
            if (err) throw err;
            res.render('editNote', {title: note.title, note: note.note, _id: note._id});
        });
    },

    update (req, res) {
        console.log(req.params);
        Note.findByIdAndUpdate(req.params.id, {title: req.body.title, note: req.body.note}, (err) => {
            if (err) throw err;
            res.redirect(`/notes/${req.params.id}`);
        });
    }
};
