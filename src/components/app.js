import { createElement, Component } from 'react';
import Header from './header/header';
import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var testElem = createElement('span', null, 'Testing app bootstrap with header');
        var headerElem = createElement(Header, {
            iconSrc: this.props.iconSrc
        });
        return createElement(
            'div',
            { 
                className: 'app'
            },
            headerElem,
            testElem
          );
    }
}