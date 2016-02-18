"use strict";

const express = require('express');
const router = express.Router();

router.get('/notes/new', (req, res) => {
    res.render('addNote');
});

router.post('/notes', (req, res) => {
    console.log('note posted');
    res.redirect('/');
});

module.exports = router;
