import React from 'react';
import StockCard from '../stockCard/stockCard';
import './stockCards.scss';

const removeButtonEntity = String.fromCharCode(8855);

export default class StockCards extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var stockCards = (this.props.symbols || [])
            .map(symbol => (
                    <div
                        className='stock-cards-list-item'
                        key={symbol}>
                        <StockCard symbol={symbol}></StockCard>
                        <button onClick={() => this.props.handleRemoveSymbol(symbol)}>
                            {removeButtonEntity}
                        </button>
                    </div>
            ));
        // Display no stock cards message
        // if in fact there are no stock cards
        if (stockCards.length === 0) {
            return (
                <div>No stock symbols selected</div>
            );
        }
        return (
            <div className='stock-cards-list'>
                {stockCards}
            </div>
        );
    }
}