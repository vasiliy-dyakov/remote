import debug from 'debug';

var state = window.__STATE__,
    logInfo = debug('framework:info:client:Application');

class Application {
    constructor() {
        logInfo('client state', state);
    }
}

new Application();
