import React from 'react';

export default class ShowHide extends React.Component {
    render() {
        return <div>
            {false && <div>This will not render</div>}
            {true && <div>This will render</div>}
        </div>
    }
}