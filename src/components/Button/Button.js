import React from 'react';
import './Button.css';

export default class Button extends React.Component {
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
            <button onClick={this.increment}>Click Me!</button>
            <b>{this.state.count}</b>
        </div>
    }
}