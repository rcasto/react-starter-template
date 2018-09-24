import { createElement, Component } from 'react';

export default class TestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0
        };
    }
    render() {
        const sourceInfoContainer = createElement(
            'div',
            null,
            `Powered by ${this.props.source}`
          )
        const countButton = createElement(
            'button',
            {
                onClick: () =>
                    this.setState({ clicks: this.state.clicks + 1 })
            },
            `${this.state.clicks} click${this.state.clicks === 1 ? '' : 's'}`
        );
        return createElement(
            'div',
            null,
            sourceInfoContainer,
            countButton
          );

        return ;
    }
}