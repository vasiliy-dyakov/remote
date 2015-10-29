import React from 'react';
import Head from '../head/Head.jsx';
import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';

export default class LayoutCommon extends React.Component {
    render() {
        return <html>
            <Head/>
            <body>
                <div className='layout__container_common'>
                    <Header/>
                    <div className='layout__content'>
                        {this.props.children}
                    </div>
                    <Footer/>
                </div>
            </body>
        </html>;
    }
}
