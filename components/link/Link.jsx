import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import routes from '../../configs/routes';
import changeRoute from '../../actions/changeRoute';

@connect(state => ({
    route: state.route
}))
export default class extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        route: PropTypes.string.isRequired
    };

    onClick(event) {
        var newRoute = routes[this.props.href] || 'Error404Page';

        event.preventDefault();
        if (newRoute !== this.props.route) {
            this.props.dispatch(changeRoute(newRoute));
            history.pushState({
                route: newRoute
            }, '', this.props.href);
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
