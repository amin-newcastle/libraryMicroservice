import mongoose from 'mongoose';
import {config} from '../config/config.js';

export class MongoConnector {
    constructor({ url, opts }) {
        this.url = url;
        this.opts = opts;
        this.connect(url, opts);
    }

    connect() {
        console.log(config);
        if (config.app.logLevel === 'debug' && process.env.NODE_ENV !== 'test') {
            mongoose.set('debug', true);
        }

        mongoose.connection.on('connecting', () => {
            console.log({ message: `Mongoose attempting to connect to: ${this.url}` });
        });

        mongoose.connection.on('connected', () => {
            console.log({ message: `Mongoose connection is open to: ${this.url}` });
            if (config.app.logLevel !== 'debug') {
                mongoose.set('debug', false);
            }
        });

        mongoose.connection.on('error', (err) => {
            console.log({ message: `Mongoose error has occurred: ${err}` });
        });

        mongoose.connection.on('disconnected', () => {
            console.log({ message: `Mongoose disconnected from: ${this.url}` });
        });

        process.on('SIGINT', () => {
            mongoose.connection.close(() => {
                console.log({ message: `Application terminated, dropping connection to: ${this.url}` });
                process.exit(0);
            });
        });

        mongoose.connect(this.url, this.opts);
    }

    static disconnect(done) {
        mongoose.disconnect(done);
    }
}

export default MongoConnector;