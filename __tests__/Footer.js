jest.dontMock('../components/footer/Footer.jsx');
jest.dontMock('../common/ContextProvider.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Footer = require('../components/footer/Footer.jsx'),
    ContextProvider = require('../common/ContextProvider.jsx');

var contextMock = {
    getStore() {
        return {
            getState() {
                return {};
            }
        };
    }
};

describe('Footer', () => {

    it('should have correct text inside', () => {

        // Render a checkbox with label in the document
        var checkbox = TestUtils.renderIntoDocument(<ContextProvider context={contextMock}>
                {() => <Footer/>}
            </ContextProvider>),
            footerNode = ReactDOM.findDOMNode(checkbox);

        expect(footerNode.textContent).toEqual('Footer text');
    });

});
