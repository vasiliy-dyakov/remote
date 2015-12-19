import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as pages from '../../pages';
import changeRoute from '../../actions/changeRoute';

@connect(state => ({
    route: state.route
}))
export default class extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        route: PropTypes.string.isRequired
    };

    componentDidMount() {
        window.onpopstate = this.onPopState.bind(this);
        history.replaceState({
            route: this.props.route
        }, '');
    }

    onPopState(event) {
        this.props.dispatch(changeRoute(event.state.route));
    }

    render() {
        var PageComponent = pages[this.props.route];

        return <PageComponent/>;
    }
}
