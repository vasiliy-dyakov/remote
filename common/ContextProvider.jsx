import React from 'react';

export default class ContextProvider extends React.Component {

    static childContextTypes = {
        getStore: React.PropTypes.func.isRequired,
        staticRoot: React.PropTypes.string
    };

    getChildContext() {
        return {
            getStore: (...options) => this.props.context.getStore(...options),
            staticRoot: this.props.context.staticRoot || ''
        };
    }

    render() {
        return this.props.children();
    }
}
