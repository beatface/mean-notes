"use strict";

const express = require('express');
const router = express.Router();

const newNote = require('./addNoteRoute');
const showNote = require('./showNoteRoute');

router.use(newNote);
router.use(showNote);


router.get('/', (req, res) => {
    res.send('Awwww, yeahhhhhhhhhhh!!!!');
});



module.exports = router;
