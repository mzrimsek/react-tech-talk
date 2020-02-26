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
            <PropButton handleClick={this.increment}></PropButton>
            <b>{this.state.count}</b>
        </div>
    }
}

class PropButton extends React.Component {
    render() {
        return <button onClick={() => this.props.handleClick()}>Click Me!</button>
    }
}