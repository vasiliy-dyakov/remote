import React from 'react';
import Layout from '../components/layout/LayoutCommon.jsx';
import Todos from '../components/todos/Todos.jsx';

export default class extends React.Component {
    render() {
        return <Layout>
            <Todos/>
        </Layout>;
    }
}
