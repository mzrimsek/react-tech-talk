import React from 'react';
import './Content.css';
import Button from '../Button/Button';
import PictureSelector from '../PictureSelector/PictureSelector';
import Picture from '../Picture/Picture';

export default class Content extends React.Component {
    constructor() {
        super();
        this.state = {
            picture: '',
            caption: ''
        };
        this.setPicture = this.setPicture.bind(this);
    }

    setPicture(picture, caption) {
        this.setState({
            picture,
            caption
        });
    }

    render() {
        return <div className="content">
            <Button></Button>
            <PictureSelector setPicture={this.setPicture}></PictureSelector>
            <Picture src={this.state.picture}>
                {this.state.caption}
            </Picture>
        </div>
    }
}