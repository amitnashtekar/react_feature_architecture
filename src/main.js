import React, { Component } from "react";
import ReactDOM from "react-dom";
import configureStore from './app/store/store';
import { Provider } from 'react-redux';
import CustomerSearch from './features/customer-search/customer-search.js';

const store = configureStore( window.REDUX_INITIAL_DATA );


ReactDOM.render(
  <Provider store = {store}>
    <CustomerSearch />
  </Provider>,
  document.getElementById('app')
);