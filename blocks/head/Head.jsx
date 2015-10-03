import React from 'react';

export default class Head extends React.Component {
    render() {
        var title = this.props.context.getStore('user').getState().anonymus
            ? 'Аноним'
            : 'Не аноним';

        return <head>
            <title>{title}</title>
        </head>;
    }
}
