import * as FiltersSelectors from 'src/selectors/filters-selectors';

describe('FiltersSelectors', () => {
  it(`should execute getSearchFiltersValue correctly`, (done) => {
    expect(FiltersSelectors.getSearchFiltersValue({
      FilterSearchReducer: 'FilterSearchReducer',
    })).toMatchSnapshot();

    done();
  });
  it(`should execute getSelectFiltersValue correctly`, (done) => {
    expect(FiltersSelectors.getSelectFiltersValue({
      FilterSelectReducer: 'FilterSelectReducer',
    })).toMatchSnapshot();

    done();
  });
});
