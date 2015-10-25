import express from 'express';
import _ from 'lodash';
import debug from 'debug';
import React from 'react';
import Promise from 'bluebird';
import routes from '../configs/routes';
import Context from '../common/Context';

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
            PageComponent = !_.isUndefined(route) ? require(`../pages/${route}`) : require(`../pages/Error404Page.jsx`);

        this.executeActions(PageComponent.actions || {}, context)
            .then(() => {
                response.send(React.renderToString(React.createElement(PageComponent, {
                    context: context.context
                })));
            });
    }

    executeActions(actions, context) {
        logInfo('Выполняем actions страницы');
        return Promise.settle(_.map(actions, (payload, action) => context.executeAction(action, payload)))
            .then(results => {
                logInfo('Все actions страницы выполнены');
                return results;
            });
    }

    getRoute(path) {
        return routes[path];
    }
}
