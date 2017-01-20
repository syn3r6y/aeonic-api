/**
 * Aeonic Account Model
 * Created by: Kyle Erickson
 * Jan 20, 2017
 */

// LIBRARY IMPORTS
import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const Schema = mongoose.Schema;
let Account = new Schema({
    email: String,
    password: String
});

Account.plugin(passportLocalMongoose);
module.exports = mongoose.model('Account', Account);