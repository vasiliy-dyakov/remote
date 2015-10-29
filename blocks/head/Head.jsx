import React from 'react';

export default class Head extends React.Component {

    static contextTypes = {
        getStore: React.PropTypes.func.isRequired
    };

    render() {
        var title = this.context.getStore('user').getState().anonymus
            ? 'Аноним'
            : 'Не аноним';

        return <head>
            <title>{title}</title>
        </head>;
    }
}
