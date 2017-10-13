import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

document.addEventListener('DOMContentLoaded', () => {

	const root = document.getElementById('output-here');
	ReactDOM.render( < App / > , root);
});