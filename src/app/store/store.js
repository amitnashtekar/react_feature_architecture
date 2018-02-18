import { createStore, applyMiddleware} from "redux";
import reducer from '../rootReducer';
import {createLogger} from 'redux-logger';

export default function configureStore(initalState) {

	return createStore(
		reducer,
		initalState,
		applyMiddleware(
			createLogger(true)
			)

		)
}