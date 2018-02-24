import { takeLatest, put ,call, fork} from 'redux-saga/effects';
import {ASYNC_ERROR} from '../../app/middleware/errorHandler';

import * as actions from './actions';

export function* custSearch(searchStr) {
	 try{

	  const custList = yield call(actions.getCustomer,searchStr);
	  yield put({type: actions._success, payload: custList });
	  
	}catch(e){
		yield put({type: `${ASYNC_ERROR}`, error: e,reducerName:'cust_search' });
	}
}

export default function* rootSaga() {
	yield fork(custSearch,'');
  yield takeLatest(actions._start, custSearch);

}