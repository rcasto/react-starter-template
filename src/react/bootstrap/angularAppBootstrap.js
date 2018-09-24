import { react2angular } from 'react2angular';

import TestService from '../services/testService';
import TestComponent from '../components/testComponent';

// Hook up to AngularJS application
export function bootStrap(moduleName) {
    return angular
        .module(moduleName, [])
        .service('testService', TestService)
        .component('testComponent', react2angular(TestComponent, ['source'], ['angularService']));
}