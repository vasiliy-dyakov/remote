import Action from '../common/Action';

export default class CookieParseAction extends Action {
    execute({ resolve }) {
        var data = { anonymus: false };
        this.dispatch('GET_USER_INFO', data);
        resolve(data);
    }
}
