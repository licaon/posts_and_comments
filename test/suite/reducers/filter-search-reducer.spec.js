import { ADD_SEARCH_FILTER } from 'src/constants/action-types';
import FilterSearchReducer from 'src/reducers/filter-search-reducer';

describe('FilterSearchReducer', () => {
  it(`should update reducer correctly on ${ADD_SEARCH_FILTER}`, (done) => {
    expect(FilterSearchReducer(
      undefined,
      {
        type: ADD_SEARCH_FILTER,
        payload: {
          type: 'search',
          value: 'value',
          fields: ['id'],
        },
      },
    )).toMatchSnapshot();
    done();
  });
  it(`should return reducer correctly on unknown action`, (done) => {
    expect(FilterSearchReducer(
      undefined,
      { type: 'unknown' },
    )).toMatchSnapshot();
    done();
  });
});
