import React from 'react';

export default class FooterScripts extends React.Component {

    static contextTypes = {
        staticRoot: React.PropTypes.string
    };

    render() {
        var staticRoot = this.context.staticRoot;

        return <div>
            <script src={`${staticRoot}/dist/Application.js`}></script>
        </div>;
    }
}
