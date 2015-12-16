import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import routes from '../../configs/routes';
import changeRoute from '../../actions/changeRoute';

@connect(context => ({
    route: context.route
}))
export default class extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        route: PropTypes.string.isRequired
    };

    changeRoute = bindActionCreators(changeRoute, this.props.dispatch);

    onClick(event) {
        var newRoute = routes[this.props.href] || 'Error404Page';

        event.preventDefault();
        if (newRoute !== this.props.route) {
            this.changeRoute(newRoute);
        }
    }

    render() {
        return <a className='link'
            href={this.props.href}
            onClick={this.onClick.bind(this)}>
            {this.props.children}
        </a>;
    }
}
