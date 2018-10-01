import { createElement } from 'react';
import { render } from 'react-dom';
import TestComponent from '../components/testComponent';

// Setup a separate react app on the page
export function bootStrap(selector) {
    const domContainer = document.querySelector(selector);
    render(createElement(TestComponent, {
        source: 'react'
    }), domContainer);
}