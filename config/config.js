// const env = process.env.NODE_ENV || 'docker';
const docker = {
    app: {
        port: parseInt(process.env.APP_PORT) || 8084,
        logLevel: 'debug',
        retryReference: parseInt(process.env.APP_RETRY_REFERENCE) || 5,
        metrics: false,
    },
    db: process.env.MONGO_URI || 'mongodb://mongo/library',
}

// const config = {
//     docker
// };

const config = docker;

// module.exports = config[env];
// module.exports.env = env;
export {config};