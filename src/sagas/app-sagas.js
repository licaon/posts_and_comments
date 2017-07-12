import { put } from 'redux-saga/effects';

import { PostsActions } from 'src/actions';

export function* initApp() {
  yield put(PostsActions.getPosts());
}
