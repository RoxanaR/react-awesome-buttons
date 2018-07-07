import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './Buttons.css';

const LoadingButton = props => {
    return (
        <button className='mainContent'>
            <i className="fa fa-circle-o-notch fa-spin"></i> {props.text}
        </button>
    );
};

export default LoadingButton;