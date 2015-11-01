import React from 'react';

export default class Application extends React.Component {

    static contextTypes = {
        getStore: React.PropTypes.func.isRequired,
        staticRoot: React.PropTypes.string
    };

    render() {
        var title = this.context.getStore('user').getState().anonymus
                ? 'Аноним'
                : 'Не аноним',
            staticRoot = this.context.staticRoot;

        return <html id='application'>
            <head>
                <title>{title}</title>
                <link rel='stylesheet/less' type='text/css' href={`${staticRoot}/components/application/application.less`}/>
            </head>
            <body>
                {this.props.children}
            </body>
        </html>;
    }
}
