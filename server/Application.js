import express from 'express';
import env from '../configs/env';
import debug from 'debug';

var logInfo = debug('Application:info');

export default class Application {
    constructor() {
        this.initServer();
    }

    initServer() {
        var server = express();

        server.get('/*', this.requestHandler.bind(this));

        server.listen(env.PORT);
        logInfo('Server listen port', env.PORT);
    }

    requestHandler(request, response) {
        response.send('Hello World');
    }
}
