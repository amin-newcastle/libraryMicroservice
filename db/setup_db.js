// import { Application } from 'express';
import Connector from '../connectors/mongo-connector.js';
import {config} from '../config/config.js';
// import { logger } from '../helpers/logger';
// import { seedDB } from '../helpers/db/seed-db';

export default function setup_db(app) {
    console.log({
        message: 'SETUP - Connecting to mongo...',
    });

    const db = new Connector({
        url: config.db,
        opts: {
            useNewUrlParser: true,
            socketTimeoutMS: 0,
            keepAlive: true,
            useUnifiedTopology: true
        },
    });

    app.set('mongo', db);

    //Populate the db with a default set of flags if empty
    seedDB();
}
