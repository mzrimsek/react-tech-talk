import React from 'react';

export default class List extends React.Component {
    render() {
        const data = [
            {text: 'Barrio'},
            {text: 'Happy Moose'},
            {text: 'Fun Buffet'}
        ];
        
        let listItems = [];
        for(const item of data) {
            const listItem = <li>{item.text}</li>
            listItems.push(listItem);
        }

        // const listItems = data.map(item => <li>{item.text}</li>);

        return (<div>
            <label>Restaurants:</label>
            <ul>
                {listItems}
            </ul>
        </div>);
    }
}