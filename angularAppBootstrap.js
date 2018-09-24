import { react2angular } from 'react2angular';

import TestService from './testService';
import TestComponent from './testComponent';

// Hook up to AngularJS application
export function bootStrap() {
    angular
        .module('react-app', [])
        .service('testService', TestService)
        .component('testComponent', react2angular(TestComponent, ['source']));
}