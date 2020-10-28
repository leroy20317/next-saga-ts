import { actionTypes, setMessage } from '../actions/common';
import { put, takeLatest } from 'redux-saga/effects';
import { messageData } from '../service/common';

function* getMessage() {
	const { data } = yield messageData();

	yield put(setMessage(data));
}

function* commonSaga() {
	yield takeLatest(actionTypes.GET_MESSAGE, getMessage);
}

export default commonSaga;
