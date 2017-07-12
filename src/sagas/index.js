import { takeEvery } from 'redux-saga';
import * as ActionTypes from 'src/constants/action-types';
import HttpRequestSagas from 'src/sagas/http-request-sagas';

function* rootSaga() {
  yield [
    takeEvery(ActionTypes.START_LOADING_DATA, HttpRequestSagas.startHttpRequest),
  ];
}

export default rootSaga;
