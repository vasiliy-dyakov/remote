import debug from 'debug';
import env from '../configs/env';

debug.enable(env.DEBUG_CLIENT);

var logInfo = debug('framework:info:client:Application');

class Application {
    constructor(state) {
        logInfo('client state', state);
    }
}

new Application(window.__STATE__);
