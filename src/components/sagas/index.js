import { put, takeEvery, call } from 'redux-saga/effects';
import { IMAGES } from '../constants';
//worker saga
function* handleImagesLoad() {
    console.log('Fetching Imagess from UnSplash');
}

//watcher saga
function* rootSaga() {
    takeEvery(IMAGES.LOAD, handleImagesLoad);
}

//watcher saga -> watch action ->worker saga

export default rootSaga;
