import { createElement } from 'react';
import { render } from 'react-dom';
import TestComponent from './components/testComponent';

// Setup a separate react app on the page
const domContainer = document.querySelector('.react-container');
render(createElement(TestComponent, {
    source: 'react'
}), domContainer);