import express from 'express';
import _ from 'lodash';
import debug from 'debug';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import routes from '../configs/routes';
import staticConfig from '../configs/static';
import * as reducers from '../reducers';
import initialState from '../configs/initialState';
import ApplicationComponent from '../components/application/Application.jsx';

var logInfo = debug('framework:info:Application'),
    logError = debug('framework:error:Application'),
    staticRoot = process.env.STATIC_ROOT,
    rootDir = __dirname.split('/').slice(0, -1).join('/'),
    ERROR_404_PAGE = 'Error404Page';

export default class Application {
    constructor() {
        this.initServer();
    }

    initServer() {
        var server = express();

        server.get(staticRoot + '/*', this.staticRequestHandler.bind(this));
        server.get('/*', this.requestHandler.bind(this));

        server.listen(process.env.PORT);
        logInfo('Server listen port', process.env.PORT);
    }

    requestHandler(request, response) {
        logInfo('Запросили путь', request.path);

        try {
            var route = this.getRoute(request.path) || ERROR_404_PAGE,
                store = createStore(
                    combineReducers(reducers),
                    Object.assign({}, initialState, { route })
                ),
                html = this.getHtml(store);

            logInfo('route', route);

            if (route === ERROR_404_PAGE) {
                response.status(404);
            }

        } catch (error) {
            logError(error);
            response.status(500);
            html = `<h1>Error 500</h1>
                <p>${process.env.NODE_ENV === 'development' ? error + '' : 'Internal server error'}</p>`;
        } finally {
            response.send(html);
        }
    }

    getHtml(store = {}) {
        return `<!DOCTYPE html><html>
            <head>
                <title>${this.getTitle()}</title>
                ${this.getCss()}
            </head>
            <body>
                <div id='application'>${ReactDOMServer.renderToString(
                    <Provider store={store}>
                        <ApplicationComponent/>
                    </Provider>
                )}</div>
                ${this.getScripts(store)}
            </body>
        </html>`;
    }

    getTitle() {
        return 'Redux';
    }

    getCss() {
        return ['/components/application/application.less'].map(path => {
            return `<link rel="stylesheet/less" type="text/css" href="${staticRoot}${path}"/>`;
        });
    }

    getScripts(store) {
        var scripts = [
            '/node_modules/less/dist/less.js',
            '/dist/Application.js'
        ].map(path => `<script src="${staticRoot}${path}"></script>`);

        scripts.unshift(`<script>window.__STATE__ = ${JSON.stringify(store.getState())};</script>`);

        return scripts.join('');
    }

    getRoute(path) {
        return routes[path];
    }

    staticRequestHandler(request, response) {
        var path = request.path.replace(staticRoot, '');

        if (_.find(staticConfig.enabledPatterns, pattern => pattern.test(path))) {
            logInfo('Запросили файл статики', path);
            response.sendFile(rootDir + path);
        } else {
            logInfo('Запрошенный файл статики не удовлетворяет разрешенным шаблонам', path);
            response.sendStatus(403);
        }
    }
}
