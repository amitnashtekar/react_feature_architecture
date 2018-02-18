import { combineReducers } from 'redux';
import * as cust_search from './actions';

const initialState = {
	loading:false,
	searchStr:'',
	payload:null
}

const cust_search_reducer=(state=initialState,action) => {
	switch(action.type) {
		case cust_search._start: return {
			...state,loading:true,searchStr:action.searchStr
		}
		case cust_search._success: return {
			...state,loading:false,payload:action.payload
		} 
		default: return state;
	}

}

export default combineReducers({
	cust_search:cust_search_reducer
})
