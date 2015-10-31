import express from 'express';
import _ from 'lodash';
import debug from 'debug';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Promise from 'bluebird';
import routes from '../configs/routes';
import Context from '../common/Context';
import ContextProvider from '../common/ContextProvider.jsx';

var logInfo = debug('framework:info:Application');

export default class Application {
    constructor() {
        this.initServer();
    }

    initServer() {
        var server = express();

        server.get('/*', this.requestHandler.bind(this));

        server.listen(process.env.PORT);
        logInfo('Server listen port', process.env.PORT);
    }

    requestHandler(request, response) {
        logInfo('Запросили путь', request.path);

        var route = this.getRoute(request.path),
            context = new Context(),
            isFound = !_.isUndefined(route),
            PageComponent = isFound ? require(`../pages/${route}`) : require('../pages/Error404.jsx');

        if (!isFound) {
            response.status(404);
        }

        this.executeActions(PageComponent.actions, context)
            .then(() => response.send(this.renderPage(PageComponent, context)))
            .catch(error => {
                response.status(500);
                response.send(this.renderPage(require('../pages/Error500.jsx'), context, {
                    message: process.env.NODE_ENV === 'development' ? error + '' : 'Internal server error'
                }));
            });
    }

    renderPage(PageComponent, context, props = {}) {
        var html = ReactDOMServer.renderToString(<ContextProvider context={context}>{() => <PageComponent {...props}/>}</ContextProvider>);

        return `<!DOCTYPE html>${html}`;
    }

    executeActions(actions = [], context) {
        logInfo('Выполняем actions страницы');
        logInfo('actions', actions);

        return Promise.all(actions.map(({ action, payload }) => new action({ context, payload })));
    }

    getRoute(path) {
        return routes[path];
    }
}
