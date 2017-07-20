import {  ADD_USER } from 'src/constants/action-types';
import UsersReducer from 'src/reducers/users-reducer';

describe('UsersReducer', () => {
  it(`should update reducer correctly on ${ADD_USER}`, (done) => {
    expect(UsersReducer(
      undefined,
      {
        type: ADD_USER,
        payload: {
          user: 1,
        },
      },
    )).toMatchSnapshot();
    done();
  });
  it(`should return reducer correctly on unknown action`, (done) => {
    expect(UsersReducer(
      undefined,
      { type: 'unknown' },
    )).toMatchSnapshot();
    done();
  });
});
