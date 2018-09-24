import { react2angular } from 'react2angular';
import TestService from './testService';

// Hook up to AngularJS application
export function bootStrap() {
    angular
        .module('react-app', [])
        .service('testService', TestService)
        .component('countButton', react2angular(CountButton, ['source']));
}