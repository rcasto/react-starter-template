import { createElement } from 'react';
import renderer from 'react-test-renderer';
import App from '../components/app/app';
import StockCards from '../components/stockCards/stockCards';

const mockStockCardsComponent = createElement('div', {
    className: 'stock-cards-test'
}, 'Stock Cards Component');

jest.mock('../components/stockCards/stockCards', () => {
    return jest.fn().mockImplementation(() => {
        return {
            render: () => mockStockCardsComponent
        };
    });
});

beforeEach(() => {
    StockCards.mockClear();
});

test('Can initialize application component', () => {
    const symbols = ['MSFT', 'AAPL'];
    const component = createElement(App, {
        symbols
    });
    const renderedComponent = renderer.create(component);
    let tree = renderedComponent.toJSON();

    expect(tree).toMatchSnapshot();
    expect(StockCards.mock.calls.length).toEqual(1);
    expect(StockCards).toHaveBeenCalledWith(expect.objectContaining({
        symbols
    }), {});
});