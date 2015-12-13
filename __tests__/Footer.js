jest.dontMock('../components/footer/Footer.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Footer = require('../components/footer/Footer.jsx');

describe('Footer', () => {

    it('should have correct text inside', () => {

        var footer = TestUtils.renderIntoDocument(<Footer/>),
            footerNode = ReactDOM.findDOMNode(footer);

        expect(footerNode.textContent).toEqual('Footer text');
    });

});
