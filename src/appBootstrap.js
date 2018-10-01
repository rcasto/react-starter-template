import { createElement } from 'react';
import { render } from 'react-dom';
import App from './components/app';

export function bootstrap(selector) {
    const domContainer = document.querySelector(selector);
    render(createElement(App, {
        source: 'react'
    }), domContainer);
}