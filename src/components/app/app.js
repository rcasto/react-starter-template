import React from 'react';
import StockCards from '../stockCards/stockCards';
import './app.scss';

export default class App extends React.Component {
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
        return (
            <div className='app'>
                <StockCards
                    symbols={this.state.symbols} 
                    handleRemoveSymbol={this.handleRemoveSymbol.bind(this)}>
                </StockCards>
            </div>
        );
    }
}