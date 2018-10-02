import { createElement } from 'react';
import { render } from 'react-dom';
import App from '../components/app/app';

export function bootstrap(selector, appState) {
    const domContainer = document.querySelector(selector);
    if (!domContainer) {
        console.error(`Couldn't find an element matching selector ${selector}`);
        return;
    }
    render(createElement(App, appState), domContainer);
}