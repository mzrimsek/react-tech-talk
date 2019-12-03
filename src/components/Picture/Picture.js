import React from 'react';
import './Picture.css';

export default class Picture extends React.Component {
    hasPicture() {
        return this.props.src !== '';
    }

    renderError() {
        return <div>No Picture Selected!</div>
    }

    renderPicture() {
        return <img src={this.props.src} alt="fun pic" />;
    }

    render() {
        return <div className="picture">
            {!this.hasPicture() && this.renderError()}
            {this.hasPicture() && this.renderPicture()}
            {this.props.children}
        </div>
    }
}