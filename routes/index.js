/**
 * Aeonic Server Routing
 * Created by: Kyle Erickson
 * Jan 20, 2017
 */

// IMPORT LIBRARIES
import express from 'express';
import config from '../config';
import middleware from '../middleware';
//import initDB from '../config/db';
import account from '../controller/account';

let router = express();


// Internal middleware
router.use(middleware({ config }));

// API routes V1
router.use('/account', account({ config }));


export default router;