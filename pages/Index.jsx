import React from 'react';
import Layout from '../components/layout/LayoutCommon.jsx';
import CookieParseAction from '../actions/CookieParse';

export default class Index extends React.Component {
    static actions = [
        { action: CookieParseAction, payload: {} }
    ];

    render() {
        return <Layout>
            Content is here.
        </Layout>;
    }
}
