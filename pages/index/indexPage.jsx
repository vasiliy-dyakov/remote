import React from 'react';
import PageComponent from '../../common/PageComponent';
import Layout from '../../blocks/layout/LayoutCommon.jsx';

export default class IndexPage extends PageComponent {
    static actions = ['cookie/parse'];

    render() {
        return <Layout context={this.props.context}>
            Content is here.
        </Layout>;
    }
}
