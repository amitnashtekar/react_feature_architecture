import { combineReducers } from 'redux';
import * as cust_search from './actions';
import {ASYNC_ERROR} from '../../app/middleware/errorHandler';
import {normalize, schema, arrayOf } from 'normalizr';

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
		case cust_search._success:
		
		const customer = new schema.Entity('customers');
		const resp = normalize(action.payload.customers,{
			'customers':[customer]	
		})
		 return {
			...state,loading:false,payload:resp
		}
		case `cust_search${ASYNC_ERROR}`: return {
			...state,loading:false,error:action.error
		} 
		default: return state;
	}

}

export default combineReducers({
	cust_search:cust_search_reducer
})
