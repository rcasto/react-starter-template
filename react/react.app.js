import { bootStrap as AngularBootStrap } from './bootstrap/angularAppBootstrap';
import { bootStrap as ReactBootStrap } from './bootstrap/reactAppBootstrap';

// Setup a separate react app on the page
ReactBootStrap('.react-container');

// Hook up to angular app
AngularBootStrap('react-app');