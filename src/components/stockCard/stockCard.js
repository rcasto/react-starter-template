import React from 'react';
import { getQuoteForSymbol } from '../../services/iexService';
import './stockCard.scss';

const quoteUpdateIntervalInMs = 15000;

export default class StockCard extends React.Component {
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
            return (
                <div>Error fetching stock data for ${this.props.symbol}</div>
            );
        }
        if (!this.state.quote) {
            return (
                <div>Loading...</div>
            );
        }
        let quote = this.state.quote;
        return (
            <div className='stock-card'>
                <div>{quote.symbol} - {quote.companyName}</div>
                <div>{quote.latestPrice} ({quote.change})</div>
            </div>
        );
    }
}