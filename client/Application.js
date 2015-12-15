import debug from 'debug';
import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import env from '../configs/env';
import ApplicationComponent from '../components/application/Application.jsx';
import * as reducers from '../reducers';

debug.enable(env.DEBUG_CLIENT);

var logInfo = debug('framework:info:client:Application');

class Application {
    constructor(state) {
        var store = this.createStore(state);

        ReactDOM.render(
            <Provider store={store}>
                <ApplicationComponent />
            </Provider>,
            document.getElementById('application')
        );
    }

    createStore(initialState) {
        logInfo('initial client state', initialState);
        return createStore(combineReducers(reducers), initialState);
    }
}

new Application(window.__STATE__);
