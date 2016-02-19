"use strict";

const express = require('express');
const router = express.Router();

const newNote = require('./addNoteRoute');
const categories = require('./categoriesRoutes');

router.use(newNote);
router.use(categories);

router.get('/', (req, res) => {
    res.send('Awwww, yeahhhhhhhhhhh!!!!');
});

module.exports = router;
