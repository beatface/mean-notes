"use strict";

const express = require('express');
const router = express.Router();

const Note = require('../models/addNoteModel');

router.get('/notes/new', (req, res) => {
    res.render('addNote');
});

router.post('/notes', (req, res) => {
    console.log(req.body);
    Note.create(req.body, (err, note) => {
        if (err) throw err;
        console.log('note posted');
        res.redirect(`/notes/${note._id}`);
    });
});

module.exports = router;
