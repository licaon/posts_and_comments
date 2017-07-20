import * as UsersActions from 'src/actions/users-actions';

describe('UsersActions', () => {
  it('should execute action correctly with argument - #getUsers', (done) => {
    expect(UsersActions.getUsers({ test: 'test' })).toMatchSnapshot();
    done();
  });
  it('should execute action correctly without argument - #getUsers', (done) => {
    expect(UsersActions.getUsers()).toMatchSnapshot();
    done();
  });
  it('should execute action correctly with argument - #addUser', (done) => {
    expect(UsersActions.addUser({ test: 'test' })).toMatchSnapshot();
    done();
  });
  it('should execute action correctly without argument - #addUser', (done) => {
    expect(UsersActions.addUser()).toMatchSnapshot();
    done();
  });
});
