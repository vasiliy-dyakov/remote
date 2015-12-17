import React, { Component } from 'react';
import Layout from '../components/layout/LayoutCommon.jsx';
import Link from '../components/link/Link.jsx';

export default class extends Component {
    render() {
        return <Layout>
            <p>Основное содержимое страницы.</p>
            <p><Link href='/demo/'>Демо</Link></p>
        </Layout>;
    }
}
