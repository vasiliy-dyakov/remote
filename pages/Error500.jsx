import React from 'react';

export default class Error500 extends React.Component {
    render() {
        return <div>500 Error<br/>{this.props.message}</div>;
    }
}
