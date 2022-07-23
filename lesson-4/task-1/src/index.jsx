import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Page from './App';

const rootElement = document.querySelector('#root');

ReactDOM.render(<Page userId="github" />, rootElement);
