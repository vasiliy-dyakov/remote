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
        return this.state;
    }
}
