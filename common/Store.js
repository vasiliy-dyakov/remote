import BaseStore from 'dispatchr/addons/BaseStore';
import _ from 'lodash';

export default class Store extends BaseStore {
    constructor() {
        super();
        this.state = {};
    }

    getState() {
        return this.state;
    }

    setState(state) {
        _.assign(this.state, state);
        this.emitChange();
    }

    dehydrate() {
        return this.getState();
    }

    rehydrate(state) {
        this.setState(state);
    }
}
