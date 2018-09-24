import { createElement } from 'react';
import { render } from 'react-dom';
import TestService from './testService';
import CountButton from './testComponent';
import { react2angular } from 'react2angular';

// Setup a separate react app on the page
const domContainer = document.querySelector('.react-container');
render(createElement(CountButton, {
    source: 'react'
}), domContainer);

// Hook up to AngularJS application
angular
    .module('react-app', [])
    .service('testService', TestService)
    .component('countButton', react2angular(CountButton, ['source']));