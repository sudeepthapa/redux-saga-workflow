import { takeEvery, put } from 'redux-saga/effects';

//worker saga
function* workerSaga() {
    console.log('hey from worker');
    yield put({ type: 'Action from put effect' });
}

//watcher saga
function* rootSaga() {
    yield takeEvery('HELLO', workerSaga);
}

//watcher saga -> watch action ->worker saga

export default rootSaga;
