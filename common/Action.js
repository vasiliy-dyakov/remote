export default class Action {
    constructor({ context, payload, done, ...options }) {
        this.context = context;
        this.payload = payload;
        this.done = done;
        this.options = options;
        this.execute();
    }

    execute() {
        throw new Error('execute not implement');
    }

    dispatch() {
        return this.context.dispatch(...arguments);
    }

    getStore() {
        return this.context.getStore(...arguments);
    }
}
