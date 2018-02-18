import { combineReducers } from 'redux';
import {ASYNC_ERROR} from './middleware/errorHandler';
import cust_search from '../features/customer-search/reducer';

export default combineReducers({
	cust_search
});

