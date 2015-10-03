import express from 'express';
import debug from 'debug';
import React from 'react';
import dispatchr from 'dispatchr';
import Promise from 'bluebird';
import env from '../configs/env';
import routes from '../configs/routes';
import registeredStores from '../configs/registeredStores';

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
        var dispatcherInstance = dispatchr.createDispatcher({
                stores: registeredStores
            }),
            PageComponent = require('../pages/' + this.getPageComponent(request.path)),
            context = dispatcherInstance.createContext({});

        Promise.settle((PageComponent.actions || []).map(action => this.executeAction(action, context)))
            .then(() => {
                response.send(React.renderToString(React.createElement(PageComponent, {
                    context
                })));
            });
    }

    executeAction(action, context) {
        return new Promise((resolve, reject) => {
            require('../actions/' + action)(context, {}, resolve);
        });
    }

    getPageComponent(path) {
        return routes[path] || 'error404Page.jsx';
    }
}
