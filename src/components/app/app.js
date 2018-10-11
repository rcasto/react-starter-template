import { createElement, Component } from 'react';
import StockCards from '../stockCards/stockCards';
import './app.scss';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            symbols: this.props.symbols
        };
    }
    handleRemoveSymbol(symbol) {
        let symbols = this.state.symbols.slice();
        let index = symbols.indexOf(symbol);
        symbols.splice(index, 1);
        this.setState({
            symbols
        });
    }
    render() {
        var stockCards = createElement(StockCards, {
            symbols: this.state.symbols,
            handleRemoveSymbol: this.handleRemoveSymbol.bind(this)
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