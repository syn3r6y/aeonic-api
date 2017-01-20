/**
 *  Aeonic ExpressJS Server 
 *  Created by: Kyle Erickson
 *  Jan 20, 2017
 */

// LIBRARY IMPORTS
import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import passport from 'passport';
import { Strategy } from 'passport-local';
import colors from 'colors';

// FILE IMPORTS
import config from '../config';
import routes from '../routes';

let app = express();

app.server = http.createServer(app);

// MIDDLEWARE
// Parse application/json requests
app.use(bodyParser.json({
    // Limit the body length
    limit: config.bodyLimit
}));

// Passport config
app.use(passport.initialize());

let Account = require('../model/account');

passport.use(new Strategy({
    usernameField: 'email',
    passwordField: 'password',
}, Account.authenticate() ));

passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// API ROUTES V1

app.use('/api/v1', routes);

app.server.listen(config.port);
console.log(colors.green(`API process started on port ${config.port}...`));