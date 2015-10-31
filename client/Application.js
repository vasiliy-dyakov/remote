import debug from 'debug';
import env from '../configs/env';

debug.enable(env.DEBUG_CLIENT);

var state = window.__STATE__,
    logInfo = debug('framework:info:client:Application');

class Application {
    constructor() {
        logInfo('client state', state);
    }
}

new Application();
