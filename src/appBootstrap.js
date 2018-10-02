import { createElement } from 'react';
import { render } from 'react-dom';
import App from './components/app';

export function bootstrap(selector) {
    const domContainer = document.querySelector(selector);
    render(createElement(App, {
        iconSrc: 'https://compass-ssl.microsoft.com/assets/58/34/5834c9fa-22c8-41ca-bd03-ef6a4faa7823.png?n=VA%20Avatar%20Revision%20-%20White%20Small%402x.png'
    }), domContainer);
}