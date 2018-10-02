import { createElement, Component } from 'react';
import StockCard from '../stockCard/stockCard';

export default class StockCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            symbols: this.props.symbols
        };
    }
    render() {
        var stockCards = (this.state.symbols || [])
            .map(symbol => {
                let stockCard = createElement(StockCard, {
                    symbol
                });
                let removeSymbolButton = createElement('button', {
                    onClick: () => {
                        let symbols = this.state.symbols.slice();
                        var index = symbols.indexOf(symbol);
                        symbols.splice(index, 1);
                        this.setState({
                            symbols: symbols
                        });
                    }
                }, String.fromCharCode(8855));
                let stockCardContainer = createElement('div', {
                    key: symbol
                }, removeSymbolButton, stockCard);
                return stockCardContainer;
            })
        var stockCardsContainer = createElement('div', null, stockCards);
        return stockCardsContainer;
    }
}