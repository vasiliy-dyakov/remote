import dispatchr from 'dispatchr';
import registeredStores from '../configs/registeredStores';
import Promise from 'bluebird';

var dispatcher = dispatchr.createDispatcher({
    stores: registeredStores
});

export default class Context {
    constructor() {
        // TODO: executeAction должен быть частью context
        this.context = dispatcher.createContext({});
    }

    executeAction(action) {
        return new Promise((resolve) => {
            // TODO: на клиенте require не хотелось бы использовать
            require('../actions/' + action)(this.context, {}, resolve);
        });
    }

}
