import * as AppSagas from 'src/sagas/app-sagas';

describe('AppSagas', () => {
  it(`should execute initApp correctly`, (done) => {
    const generator = AppSagas.initApp();

    expect(generator.next().value).toMatchSnapshot();
    expect(generator.next().value).toMatchSnapshot();

    done();
  });
});
