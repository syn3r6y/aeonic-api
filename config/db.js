/**
 * Aeonic DB Config
 * Created by: Kyle Erickson
 * Jan 20, 2017
 */

// import mongoose from 'mongoose';
// import config from './index';

// export default (callback) => {
//     let db = mongoose.connect(config.mongoUrl);
//     callback(db);
// }

import Thinky from 'thinky';
import config from './index';

// Initialize thinky
// The most important thing is to initialize the pool of connection
let thinky = Thinky({
    host: config.dbUrl,
    port: config.dbPort,
    db: 'accounts'
});

module.exports = thinky;