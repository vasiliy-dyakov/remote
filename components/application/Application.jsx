import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
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

    changeRoute = bindActionCreators(changeRoute, this.props.dispatch);

    componentDidMount() {
        window.onpopstate = this.onPopState.bind(this);
        history.replaceState({
            route: this.props.route
        }, '');
    }

    onPopState(event) {
        this.changeRoute(event.state.route);
    }

    render() {
        var PageComponent = pages[this.props.route];

        return <PageComponent/>;
    }
}
