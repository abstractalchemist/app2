import ReactDOM from 'react-dom';
import React from 'react';

class Main extends React.Component {

    constructor() {
	super();
    }

    render() {
	return (<div />);
    }
}

document.addEventListener('ready', function() {
    ReactDOM.render(<Main />, document.getElementById('content'));
});
