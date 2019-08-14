import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import {createStore } from 'redux'

import 'bulma/css/bulma.css';
import './styles.scss';

import { featuresReducer } from './reducer/featuresReducer';
export const store = createStore(featuresReducer);
const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
