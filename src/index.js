import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import {createStore } from 'redux'
import { BrowserRouter as Router} from 'react-router-dom'
import 'bulma/css/bulma.css';
import './styles.scss';

import { featuresReducer } from './reducer/featuresReducer';
export const store = createStore(featuresReducer);
const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, rootElement);
