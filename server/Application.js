import express from 'express';
import env from '../configs/env';
import debug from 'debug';

var logInfo = debug('Application:info');

export default class Application {
    constructor() {
        var server = express();

        server.get('/*', (request, response) => {
            response.send('Hello World');
        });

        server.listen(env.PORT);
        logInfo('Server listen port', env.PORT);
    }
}
