import React from 'react';
import Layout from '../../blocks/layout/LayoutCommon.jsx';

class IndexPage extends React.Component {
    render() {
        return <Layout context={this.props.context}>
            Content is here.
        </Layout>;
    }
}

IndexPage.actions = ['cookie/parse'];

export default IndexPage;

