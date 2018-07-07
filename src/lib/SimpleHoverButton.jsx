import React from 'react';
import './Buttons.css';

const SimpleHoverButton = props => {
    return (
        <button className="simpleHoverButton">{props.text}</button>
    );
};

export default SimpleHoverButton;