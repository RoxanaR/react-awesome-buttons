import React from 'react';
import './Buttons.css';

const SimpleButton = props => {
    return (
            <button className="roundButton">{props.text}</button>
    );
};

export default SimpleButton;