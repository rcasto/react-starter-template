import { bootStrap as AngularBootStrap } from './bootstrap/angularAppBootstrap';
import { bootStrap as ReactBootStrap } from './bootstrap/reactAppBootstrap';

// Setup a separate react app on the page
ReactBootStrap();

// Hook up to angular app
AngularBootStrap();