import express from 'express';
import debug from 'debug';
import React from 'react';
import env from '../configs/env';
import routes from '../configs/routes';

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
        logInfo('Запросили путь', request.path);

        var PageComponent = require('../pages/' + this.getPageComponent(request.path));

        response.send(React.renderToString(React.createElement(PageComponent, {
            context: {}
        })));
    }

    getPageComponent(path) {
        return routes[path] || 'error404Page.jsx';
    }
}
