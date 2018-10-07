import { createElement, Component } from 'react';
import StockCards from '../stockCards/stockCards';
import './app.scss';

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var stockCards = createElement(StockCards, {
            symbols: this.props.symbols
        });
        return createElement(
            'div',
            { 
                className: 'app'
            },
            stockCards
          );
    }
}