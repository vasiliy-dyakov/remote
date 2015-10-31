import React from 'react';

export default class Head extends React.Component {

    static contextTypes = {
        staticRoot: React.PropTypes.string,
        getStore: React.PropTypes.func.isRequired
    };

    render() {
        var title = this.context.getStore('user').getState().anonymus
            ? 'Аноним'
            : 'Не аноним',
            staticRoot = this.context.staticRoot;

        return <head>
            <title>{title}</title>
            <link rel='stylesheet/less' type='text/css' href={`${staticRoot}/components/application.less`}/>
            <script src={`${staticRoot}/node_modules/less/dist/less.js`}></script>
            <script src={`${staticRoot}/dist/Application.js`}></script>
        </head>;
    }
}
