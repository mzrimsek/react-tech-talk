import React from 'react';
import './NestedButton.css';

export default class NestedButton extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
        this.increment = this.increment.bind(this);
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return <div className="button">
            <PropButton handleClick={this.increment}>
                <b>{this.state.count}</b>
            </PropButton>
        </div>
    }
}

class PropButton extends React.Component {
    render() {
        return <div>
            <button onClick={() => this.props.handleClick()}>Click Me!</button>
            {this.props.children}
        </div>
    }
}