/**
 * Aeonic DB Config
 * Created by: Kyle Erickson
 * Jan 20, 2017
 */

import mongoose from 'mongoose';
import config from './index';

export default (callback) => {
    let db = mongoose.connect(config.mongoUrl);
    callback(db);
}