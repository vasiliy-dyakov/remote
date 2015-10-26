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

    executeAction(action, payload) {
        return new Promise((resolve, reject) => {
            // TODO: на клиенте require не хотелось бы использовать
            require('../actions/' + action)(this._context, payload, (error, payload) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(payload);
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
