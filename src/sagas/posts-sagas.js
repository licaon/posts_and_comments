import { call, put } from 'redux-saga/effects';

import config from 'src/config';
import fetchData from 'src/api';
import { PostsActions } from 'src/actions';

export function* getPosts() {
  const response = yield call(fetchData, { url: `${config.url}posts` });
  yield put(PostsActions.addPost(response));
}

export function* deletePosts({ payload }) {
  const { id } = payload;
  const response = yield call(
    fetchData,
    { url: `${config.url}posts/${id}`, method: 'DELETE' },
  );

  if (!response.error) {
    yield put(PostsActions.confirmPostDelete({ id }));
  }
}
