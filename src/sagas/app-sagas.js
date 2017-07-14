import { put } from 'redux-saga/effects';

import { UsersActions, PostsActions } from 'src/actions';

export function* initApp() {
  yield put(PostsActions.getPosts());
  yield put(UsersActions.getUsers());
}
