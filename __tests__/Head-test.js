jest.dontMock('../components/head/Head.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Head from '../components/head/Head.jsx';

describe('Head', () => {
    it('should something', () => {
        var head = TestUtils.renderIntoDocument(<Head/>),
            headNode = ReactDOM.findDOMNode(head);

        expect(headNode.textContent).toEqual('Аноним');
    });
});
