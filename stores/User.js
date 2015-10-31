import Store from '../common/Store';

export default class User extends Store {
    static storeName = 'user';

    static handlers = {
        GET_USER_INFO: 'getUserInfo'
    };

    constructor() {
        super();
        this.setState({
            anonymus: true
        });
    }

    getUserInfo(payload) {
        this.setState(payload);
    }
}
