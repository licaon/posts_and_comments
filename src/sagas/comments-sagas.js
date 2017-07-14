import { call, put } from 'redux-saga/effects';

import config from 'src/config';
import fetchData from 'src/api';
import { CommentsActions } from 'src/actions';

export function* getComments({ payload }) {
  const { id } = payload;
  const response = yield call(fetchData, { url: `${config.url}posts/${id}/comments` });
  yield put(CommentsActions.addComments({
    postId: id,
    comments: response,
  }));
}
