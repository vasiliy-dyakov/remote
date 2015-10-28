import dispatchr from 'dispatchr';
import registeredStores from '../configs/registeredStores';

var dispatcher = dispatchr.createDispatcher({
    stores: registeredStores
});

export default class Context {
    constructor() {
        this._context = dispatcher.createContext({});
    }

    dispatch(...options) {
        return this._context.dispatch(...options);
    }

    getStore(...options) {
        return this._context.getStore(...options);
    }
}
