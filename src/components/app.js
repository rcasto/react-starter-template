import { createElement, Component } from 'react';
import './app.css';

const classNames = {
    sourceInfo: 'source-info',
    appContainer: 'app'
};

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0
        };
    }
    render() {
        const sourceInfoContainer = createElement(
            'div',
            { className: classNames.sourceInfo },
            `Powered by ${this.props.source}`
        );
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
            { className: classNames.appContainer },
            sourceInfoContainer,
            countButton
          );
    }
}