import * as CommentsActions from 'src/actions/comments-actions';

describe('CommentsActions', () => {
  it('should execute action correctly with argument - #getComments', (done) => {
    expect(CommentsActions.getComments({ test: 'test' })).toMatchSnapshot();
    done();
  });
  it('should execute action correctly without argument - #getComments', (done) => {
    expect(CommentsActions.getComments()).toMatchSnapshot();
    done();
  });
  it('should execute action correctly with argument - #addComments', (done) => {
    expect(CommentsActions.addComments({ test: 'test' })).toMatchSnapshot();
    done();
  });
  it('should execute action correctly without argument - #addComments', (done) => {
    expect(CommentsActions.addComments()).toMatchSnapshot();
    done();
  });
  it('should execute action correctly with argument - #toggleCommentsState', (done) => {
    expect(CommentsActions.toggleCommentsState({ test: 'test' })).toMatchSnapshot();
    done();
  });
  it('should execute action correctly without argument - #toggleCommentsState', (done) => {
    expect(CommentsActions.toggleCommentsState()).toMatchSnapshot();
    done();
  });
});
