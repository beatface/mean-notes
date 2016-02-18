"use strict";

const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/addNoteCtrl');

router.get('/notes/new', ctrl.newNote);

router.post('/notes', ctrl.postNote);

router.get('/notes/:id', ctrl.showNote);

module.exports = router;
