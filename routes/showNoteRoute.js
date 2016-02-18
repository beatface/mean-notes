"use strict";

const express = require('express');
const router = express.Router();

const Note = require('../models/addNoteModel');

router.get('/notes/:id', (req, res) => {
    Note.findById(req.params.id, (err, note) => {
        if (err) throw err;

        res.render('showNote', {note: note});
    });
});

module.exports = router;
