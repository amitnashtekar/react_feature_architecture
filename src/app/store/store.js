import 'regenerator-runtime/runtime';
import { createStore, applyMiddleware} from "redux";
import errorMiddleware from '../middleware/errorHandler'
import reducer from '../rootReducer';

import {createLogger} from 'redux-logger';


export default function configureStore(initalState, sagaMiddleware) {
  
	return createStore(
		reducer,
		initalState,
		applyMiddleware(
			errorMiddleware,
			sagaMiddleware,
			createLogger(true)
			)

		)
}