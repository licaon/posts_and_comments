import { ADD_SELECT_FILTER } from 'src/constants/action-types';
import FilterSelectReducer from 'src/reducers/filter-select-reducer';

describe('FilterSelectReducer', () => {
  it(`should update reducer correctly on ${ADD_SELECT_FILTER}`, (done) => {
    expect(FilterSelectReducer(
      undefined,
      {
        type: ADD_SELECT_FILTER,
        payload: {
          type: 'select',
          value: 'value',
          fields: ['id'],
        },
      },
    )).toMatchSnapshot();
    done();
  });
  it(`should return reducer correctly on unknown action`, (done) => {
    expect(FilterSelectReducer(
      undefined,
      { type: 'unknown' },
    )).toMatchSnapshot();
    done();
  });
});
