import * as HttpRequestActions from 'src/actions/http-request-actions';

describe('HttpRequestActions', () => {
  it('should execute action correctly with argument - #startLoadingData', (done) => {
    expect(HttpRequestActions.startLoadingData({ test: 'test' })).toMatchSnapshot();
    done();
  });
  it('should execute action correctly without argument - #startLoadingData', (done) => {
    expect(HttpRequestActions.startLoadingData()).toMatchSnapshot();
    done();
  });
  it('should execute action correctly with argument - #doneLoadingData', (done) => {
    expect(HttpRequestActions.doneLoadingData({ test: 'test' })).toMatchSnapshot();
    done();
  });
  it('should execute action correctly without argument - #doneLoadingData', (done) => {
    expect(HttpRequestActions.doneLoadingData()).toMatchSnapshot();
    done();
  });
});
