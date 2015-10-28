export default class Action {
    constructor({ context, payload = {} }) {
        this.context = context;

        return new Promise((resolve, reject) => {
            this.execute({ context, payload, resolve, reject });
        });
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
