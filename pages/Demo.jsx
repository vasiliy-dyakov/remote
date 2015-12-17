import React from 'react';
import Layout from '../components/layout/LayoutCommon.jsx';
import Todos from '../components/todos/Todos.jsx';
import Link from '../components/link/Link.jsx';

export default class extends React.Component {
    render() {
        return <Layout>
            <Todos/>
            <p><Link href='/demo1/'>Битая ссылка</Link></p>
        </Layout>;
    }
}
