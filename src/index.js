import React from 'react';
import {render} from 'react-dom';
import './css/style.css';
import StorePicker from './components/StorePicker';

document.addEventListener('DOMContentLoaded', () => {
  render(<StorePicker />, document.querySelector('#main'));
});
