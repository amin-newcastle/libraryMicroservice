import {config} from './config/config.js';

export default function startServer(app) {
    try {
        const port = config.app.port || 8084;
        app.listen(port, () => console.log(`Listening on port ${port}`));
    } catch (error) {
        console.error(error)
    }
}