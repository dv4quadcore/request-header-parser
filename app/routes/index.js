'use strict';

var parseHeaderHandler = require(process.cwd() + '/app/controllers/parseHeaderHandler.server.js');

module.exports = function (app) {
    app.route('/')
        .get(function (req, res) {
            res.send(parseHeaderHandler(req));
        });
};