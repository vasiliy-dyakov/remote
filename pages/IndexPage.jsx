import React from 'react';
import Layout from '../components/layout/LayoutCommon.jsx';
import CookieParseAction from '../actions/CookieParseAction';

export default class IndexPage extends React.Component {
    static actions = [
        { action: CookieParseAction, payload: {} }
    ];

    render() {
        return <Layout>
            Content is here.
        </Layout>;
    }
}
