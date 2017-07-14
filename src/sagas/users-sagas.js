import { call, put } from 'redux-saga/effects';

import config from 'src/config';
import fetchData from 'src/api';
import { UsersActions } from 'src/actions';

export function* getUsers() {
  const response = yield call(fetchData, { url: `${config.url}users` });
  yield put(UsersActions.addUser(response));
}
