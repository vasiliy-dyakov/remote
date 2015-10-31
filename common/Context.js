import dispatchr from 'dispatchr';
import registeredStores from '../configs/registeredStores';

var dispatcher = dispatchr.createDispatcher({
    stores: registeredStores
});

export default class Context {
    constructor(props = {}) {
        this._context = dispatcher.createContext({});
        Object.assign(this, props);
    }

    dispatch(...options) {
        return this._context.dispatch(...options);
    }

    getStore(...options) {
        return this._context.getStore(...options);
    }

    dehydrate(...options) {
        return this._context.dehydrate(...options);
    }

    rehydrate(...options) {
        return this._context.rehydrate(...options);
    }
}
