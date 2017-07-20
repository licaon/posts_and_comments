import * as UsersSagas from 'src/sagas/users-sagas';

describe('UsersSagas', () => {
  it(`should execute getUsers correctly`, (done) => {
    const generator = UsersSagas.getUsers();

    expect(generator.next().value).toMatchSnapshot();
    expect(generator.next(['user1']).value).toMatchSnapshot();

    done();
  });
});
