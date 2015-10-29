import React from 'react';

export default class ContextProvider extends React.Component {

    static childContextTypes = {
        getStore: React.PropTypes.func.isRequired
    };

    getChildContext() {
        return {
            getStore: (...options) => this.props.context.getStore(...options)
        };
    }

    render() {
        return this.props.children();
    }
}
