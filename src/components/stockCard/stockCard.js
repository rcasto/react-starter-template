import { createElement, Component } from 'react';
import { getQuoteForSymbol } from '../../services/iexService';
import './stockCard.scss';

const quoteUpdateIntervalInMs = 15000;

export default class StockCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: null,
            timerId: null,
            hasError: false
        };
        this.updateQuote();
    }
    updateQuote() {
        getQuoteForSymbol(this.props.symbol)
            .then(quote => {
                this.setState({
                    quote,
                    timerId: setTimeout(this.updateQuote.bind(this), quoteUpdateIntervalInMs)
                });
            })
            .catch(err => this.setState({
                hasError: true
            }));
    }
    componentWillUnmount() {
        clearTimeout(this.state.timerId);
    }
    render() {
        if (this.state.hasError) {
            return createElement('div', null, `Error fetching stock data for ${this.props.symbol}`);
        }
        if (!this.state.quote) {
            return createElement('div', null, 'Loading...');
        }
        let quote = this.state.quote;
        let stockSymbolName = createElement('div', null, `${quote.symbol} - ${quote.companyName}`);
        let latestStockPrice = createElement('div', null, `${quote.latestPrice} (${quote.change})`);
        let stockCardContainer = createElement('div', {
            className: 'stock-card'
        }, stockSymbolName, latestStockPrice);
        return stockCardContainer;
    }
}