import { START_LOADING_DATA, END_LOADING_DATA } from 'src/constants/action-types';
import HttpRequestReducer from 'src/reducers/http-request-reducer';

describe('HttpRequestReducer', () => {
  it(`should update reducer correctly on ${START_LOADING_DATA}`, (done) => {
    expect(HttpRequestReducer(
      undefined,
      {
        type: START_LOADING_DATA,
      },
    )).toMatchSnapshot();
    done();
  });
  it(`should update reducer correctly on ${END_LOADING_DATA}`, (done) => {
    expect(HttpRequestReducer(
      {
        loading: true,
      },
      {
        type: END_LOADING_DATA,
      },
    )).toMatchSnapshot();
    done();
  });
  it(`should return reducer correctly on unknown action`, (done) => {
    expect(HttpRequestReducer(
      undefined,
      { type: 'unknown' },
    )).toMatchSnapshot();
    done();
  });
});
