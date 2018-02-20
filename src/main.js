import React, { Component } from "react";
import ReactDOM from "react-dom";
import configureStore from './app/store/store';
import { Provider } from 'react-redux';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import createSagaMiddleware  from 'redux-saga';
import {sagas} from './features';
import {CustomerSearch} from './features';


const sagaMiddleware = createSagaMiddleware();
const store = configureStore( window.REDUX_INITIAL_DATA,sagaMiddleware );
sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store = {store}>
    <CustomerSearch />
  </Provider>,
  document.getElementById('app')
);