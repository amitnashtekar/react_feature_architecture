import { combineReducers } from 'redux';
import * as cust_search_A from './actions';

const initialState = {
	loading:false,
	payload:null,
	error:null
}

const cust_search_reducer=(state=initialState,action) => {
	switch(action.type) {
		case cust_search_A._start: return {
			...initialState,loading:true
		}
		default: return state;
	}

}

export default combineReducers({
	cust_search:cust_search_reducer
})
