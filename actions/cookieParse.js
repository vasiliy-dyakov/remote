import Action from '../common/Action';

export default class CookieParse extends Action {
    execute() {
        this.dispatch('GET_USER_INFO', { anonymus: false });
        this.done();
    }
}
