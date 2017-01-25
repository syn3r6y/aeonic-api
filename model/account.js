/**
 * Aeonic Account Model
 * Created by: Kyle Erickson
 * Jan 20, 2017
 */

// LIBRARY IMPORTS
// import mongoose from 'mongoose';
// import passportLocalMongoose from 'passport-local-mongoose';

import thinky from '../config/db';
import config from '../config/index';
const r = thinky.r;

let type = thinky.type;

//Account model
export let User = thinky.createModel("User", {
    email: type.string(),
    password: type.string()
});



// const Schema = mongoose.Schema;
// let Account = new Schema({
//     email: String,
//     password: String
// });

// Account.plugin(passportLocalMongoose);
// module.exports = mongoose.model('Account', Account);    