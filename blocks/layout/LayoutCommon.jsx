import React from 'react';
import Head from '../head/Head.jsx';
import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';

export default class LayoutCommon extends React.Component {
    render() {
        return <html>
            <Head context={this.props.context}/>
            <body>
                <div className='container'>
                    <Header context={this.props.context}/>
                    <div className='content'>
                        {this.props.children}
                    </div>
                    <Footer context={this.props.context}/>
                </div>
            </body>
        </html>;
    }
}
