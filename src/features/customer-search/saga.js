import { takeLatest, put ,call} from 'redux-saga/effects';

import * as actions from './actions';

export function* incrementAsync(searchStr) {
	 try{
	  
	  const custList = yield call(actions.getCustomer,searchStr);
	  yield put({type: actions._success, payload: custList });
	}catch(e){
		yield put({type: actions._fail, payload: e });
	}
}

export default function* rootSaga() {
  yield takeLatest(actions._start, incrementAsync);
}