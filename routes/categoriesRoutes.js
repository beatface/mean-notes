"use strict";

const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/categoryCtrl');

router.get('/categories', ctrl.index);
router.post('/categories', ctrl.create);
router.get('/categories/new', ctrl.new);

module.exports = router;
