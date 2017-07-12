import { takeEvery } from 'redux-saga';

import * as ActionTypes from 'src/constants/action-types';
import * as AppSagas from 'src/sagas/app-sagas';
import * as HttpRequestSagas from 'src/sagas/http-request-sagas';
import * as PostsSagas from 'src/sagas/posts-sagas';

function* rootSaga() {
  yield [
    takeEvery(ActionTypes.INIT, AppSagas.initApp),
    takeEvery(ActionTypes.START_LOADING_DATA, HttpRequestSagas.startHttpRequest),
    takeEvery(ActionTypes.GET_POSTS, PostsSagas.getPosts),
  ];
}

export default rootSaga;
