"use strict";
const Log = require('../models/logModel');

module.exports = (req, res, next) => {
    // log request to database
    Log.create({
        userAgent: req.headers['user-agent'],
        route: req.url,
        verb: req.method
    }, next);
}
