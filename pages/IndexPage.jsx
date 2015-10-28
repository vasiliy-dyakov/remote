import React from 'react';
import Layout from '../blocks/layout/LayoutCommon.jsx';
import CookieParse from '../actions/CookieParse';

export default class IndexPage extends React.Component {
    static actions = [
        { action: CookieParse, payload: {} }
    ];

    render() {
        return <Layout context={this.props.context}>
            Content is here.
        </Layout>;
    }
}
