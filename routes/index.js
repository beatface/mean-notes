"use strict";

const express = require('express');
const router = express.Router();

const newNote = require('./addNoteRoute');

router.use(newNote);

router.get('/', (req, res) => {
    res.send('Awwww, yeahhhhhhhhhhh!!!!');
});



module.exports = router;
