import createStore from 'dispatchr/addons/createStore';

export default createStore({
    storeName: 'user',

    initialize() {
        this.info = {
            anonymus: true
        };
    },

    handlers: {
        GET_USER_INFO: 'getUserInfo'
    },

    getState() {
        return this.info;
    },

    getUserInfo(payload) {
        this.info = payload;
    }
});
