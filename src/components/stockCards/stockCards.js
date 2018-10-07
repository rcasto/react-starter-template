import { createElement, Component } from 'react';
import StockCard from '../stockCard/stockCard';
import './stockCards.css';

const removeButtonEntity = String.fromCharCode(8855);

export default class StockCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            symbols: this.props.symbols
        };
    }
    removeSymbol(symbol) {
        let symbols = this.state.symbols.slice();
        var index = symbols.indexOf(symbol);
        symbols.splice(index, 1);
        this.setState({
            symbols: symbols
        });
    }
    render() {
        var stockCards = (this.state.symbols || [])
            .map(symbol => {
                let stockCard = createElement(StockCard, {
                    symbol
                });
                let removeSymbolButton = createElement('button', {
                    onClick: () => this.removeSymbol(symbol)
                }, removeButtonEntity);
                let stockCardContainer = createElement('div', {
                    key: symbol,
                    className: 'stock-cards-list-item'
                }, stockCard, removeSymbolButton);
                return stockCardContainer;
            });
        // Display no stock cards message
        // if in fact there are no stock cards
        if (stockCards.length === 0) {
            stockCards = createElement('div', null, 'No stock symbols selected');
        }
        var stockCardsContainer = createElement('div', {
            className: 'stock-cards-list'
        }, stockCards);
        return stockCardsContainer;
    }
}