'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _passportLocal = require('passport-local');

var _colors = require('colors');

var _colors2 = _interopRequireDefault(_colors);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _routes = require('../routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// FILE IMPORTS
var app = (0, _express2.default)(); /**
                                     *  Aeonic ExpressJS Server 
                                     *  Created by: Kyle Erickson
                                     *  Jan 20, 2017
                                     */

// LIBRARY IMPORTS


app.server = _http2.default.createServer(app);

// MIDDLEWARE
// Parse application/json requests
app.use(_bodyParser2.default.json({
    // Limit the body length
    limit: _config2.default.bodyLimit
}));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Passport config
app.use(_passport2.default.initialize());

var Account = require('../model/account');

_passport2.default.use(new _passportLocal.Strategy({
    usernameField: 'email',
    passwordField: 'password'
}, Account.authenticate()));

_passport2.default.serializeUser(Account.serializeUser());
_passport2.default.deserializeUser(Account.deserializeUser());

// API ROUTES V1

app.use('/api/v1', _routes2.default);

app.server.listen(_config2.default.port);
console.log(_colors2.default.green('API process started on port ' + _config2.default.port + '...'));
//# sourceMappingURL=index.js.map