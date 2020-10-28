import { all, fork } from 'redux-saga/effects';
import commonSaga from './common';

function* rootSaga() {
	yield all([commonSaga].map(fork));
}

export default rootSaga;
