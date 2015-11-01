import React from 'react';
import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';

export default class LayoutCommon extends React.Component {
    render() {
        return <div className='layout__container_common'>
            <Header/>
            <div className='layout__content'>
                {this.props.children}
            </div>
            <Footer/>
        </div>;
    }
}
