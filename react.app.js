import { createElement } from 'react';
import { render } from 'react-dom';
import CountButton from './testComponent';
import { bootStrap } from './angularAppBootstrap';

// Setup a separate react app on the page
const domContainer = document.querySelector('.react-container');
render(createElement(CountButton, {
    source: 'react'
}), domContainer);

// Hook up to angular app
bootStrap();