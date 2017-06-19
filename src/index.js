import React from 'react';
import {render} from 'react-dom';
import './css/style.css';
import App from './components/App';

document.addEventListener('DOMContentLoaded', () => {
  render(<App />, document.querySelector('#main'));
});
