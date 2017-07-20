import * as FiltersActions from 'src/actions/filters-actions';

describe('FilterssActions', () => {
  it('should execute action correctly with argument - #addSearchFilter', (done) => {
    expect(FiltersActions.addSearchFilter({ test: 'test' })).toMatchSnapshot();
    done();
  });
  it('should execute action correctly without argument - #addSearchFilter', (done) => {
    expect(FiltersActions.addSearchFilter()).toMatchSnapshot();
    done();
  });
  it('should execute action correctly with argument - #addSelectFilter', (done) => {
    expect(FiltersActions.addSelectFilter({ test: 'test' })).toMatchSnapshot();
    done();
  });
  it('should execute action correctly without argument - #addSelectFilter', (done) => {
    expect(FiltersActions.addSelectFilter()).toMatchSnapshot();
    done();
  });
});
