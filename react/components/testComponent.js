import { createElement, Component } from 'react';

export default class TestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0
        };
    }
    render() {
        return createElement(
            'button',
            {
                onClick: () =>
                    this.setState({ clicks: this.state.clicks + 1 })
            },
            `${this.state.clicks} clicks - ${this.props.source}`
        );
    }
}