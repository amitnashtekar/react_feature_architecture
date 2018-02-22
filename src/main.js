import React, { Component } from "react";
import ReactDOM from "react-dom";
import configureStore from './app/store/store';
import { Provider } from 'react-redux';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import createSagaMiddleware  from 'redux-saga';
import {sagas} from './features';

import Router from './app/route/route';


const sagaMiddleware = createSagaMiddleware();
const store = configureStore( window.REDUX_INITIAL_DATA,sagaMiddleware );
sagaMiddleware.run(sagas);

ReactDOM.render(
	  
  <Provider store = {store}>
    <Router />
  </Provider>,
  document.getElementById('app')
);