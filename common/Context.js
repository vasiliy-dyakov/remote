import dispatchr from 'dispatchr';
import registeredStores from '../configs/registeredStores';
import Promise from 'bluebird';

var dispatcher = dispatchr.createDispatcher({
    stores: registeredStores
});

export default class Context {
    constructor() {
        this._context = dispatcher.createContext({});
    }

    executeAction(Action, payload) {
        return new Promise((resolve, reject) => {
            new Action({
                context: this._context,
                payload,
                done(error, payload) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(payload);
                    }
                }
            });
        });
    }

    dispatch(...options) {
        return this._context.dispatch(...options);
    }

    getStore(...options) {
        return this._context.getStore(...options);
    }
}
