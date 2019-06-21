import { IMAGES } from '../constants';
import { take, fork } from 'redux-saga/effects';

function* handleStatsRequest(id) {
    console.log('fetching data of ', id);
}

function* watchStatsRequest() {
    while (true) {
        const {images} = yield take(IMAGES.LOAD_SUCCESS);
        for (let i = 0; i < images.length; i++) {
            yield fork(handleStatsRequest, images[i].id);
        }
    }
}

export default watchStatsRequest;
