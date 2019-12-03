import React from 'react';
import './PictureSelector.css';

export default class PictureSelector extends React.Component {
    render() {
        const selectionInfo = [
            {
                link: 'https://media.giphy.com/media/v6aOjy0Qo1fIA/giphy.gif',
                caption: 'Look at this beefy boi',
                text: 'Cat'
            },
            {
                link: 'https://media.giphy.com/media/gxxlowyvtfS0M/giphy.gif',
                caption: 'A herd of puppers on the way',
                text: 'Dog'
            },
            {
                link: 'https://media.giphy.com/media/IaWMz9Ln8OWvf66z6k/giphy.gif',
                caption: 'Cute, he is',
                text: 'Nerd'
            }
        ];
        const buttons = selectionInfo.map(item => <button onClick={() => this.props.setPicture(item.link, item.caption)}>{item.text}</button>);
        return <div className="picture-selector">
            <b>Select a Picture!</b>
            {buttons}
        </div>
    }
}