import { createElement, Component } from 'react';
import './header.css';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var headerChildren = [
            createElement('h1', {
                key: 'header-text'
            }, 'Virtual Agent')
        ];
        if (this.props.iconSrc) {
            headerChildren.unshift(createElement('img', {
                key: 'header-image',
                src: this.props.iconSrc
            }));
        }
        return createElement(
            'div',
            { className: 'header' },
            headerChildren
          );
    }
}