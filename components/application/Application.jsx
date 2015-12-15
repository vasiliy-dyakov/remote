import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as pages from '../../pages';

@connect(context => ({
    route: context.route
}))
export default class extends Component {
    static propTypes = {
        route: PropTypes.string.isRequired
    };

    render() {
        var PageComponent = pages[this.props.route];

        return <PageComponent/>;
    }
}
