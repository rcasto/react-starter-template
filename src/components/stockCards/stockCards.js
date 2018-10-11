import { createElement, Component } from 'react';
import StockCard from '../stockCard/stockCard';
import './stockCards.scss';

const removeButtonEntity = String.fromCharCode(8855);

export default class StockCards extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var stockCards = (this.props.symbols || [])
            .map(symbol => {
                let stockCard = createElement(StockCard, {
                    symbol
                });
                let removeSymbolButton = createElement('button', {
                    onClick: () => this.props.handleRemoveSymbol(symbol)
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