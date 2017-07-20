import * as UsersSelectors from 'src/selectors/users-selectors';

describe('UsersSelectors', () => {
  it(`should execute getUsers correctly`, (done) => {
    expect(UsersSelectors.getUsers({
      UsersReducer: {
        users: 'UsersReducer.users',
      },
    })).toMatchSnapshot();

    done();
  });
});
