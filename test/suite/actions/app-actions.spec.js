import * as AppActions from 'src/actions/app-actions';

describe('AppActions', () => {
  it('should execute action correctly with argument - #initApp', (done) => {
    expect(AppActions.initApp({ test: 'test' })).toMatchSnapshot();
    done();
  });
  it('should execute action correctly without argument - #initApp', (done) => {
    expect(AppActions.initApp()).toMatchSnapshot();
    done();
  });
});
