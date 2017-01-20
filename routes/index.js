/**
 * Aeonic Server Routing
 * Created by: Kyle Erickson
 * Jan 20, 2017
 */

// IMPORT LIBRARIES
import express from 'express';
import config from '../config';
import middleware from '../middleware';
import initDB from '../config/db';
import account from '../controller/account';

let router = express();

// Connect to the Database
initDB( (db) => {
    // Internal middleware
    router.use(middleware({ config, db }));

    // API routes V1
    router.use('/account', account({ config, db }));
})

export default router;