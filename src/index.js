import React from 'react';
import ReactDOM from 'react-dom';

import SimpleButton from './lib/SimpleButton';
import LoadingButton from './lib/LoadingButton';
import RoundButton from './lib/RoundButton';
import SimpleHoverButton from './lib/SimpleHoverButton';

class Buttons extends React.Component {
    render() {
        return (
            <React.Fragment>
                <SimpleButton text='Simple Button'/>
                <LoadingButton text='Loading'/>
                <RoundButton text='Round Button'/>
                <SimpleHoverButton text='Simple Hover'/>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<Buttons />, document.getElementById('root'));
