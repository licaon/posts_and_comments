import * as CommentsSelectors from 'src/selectors/comments-selectors';

describe('CommentsSelectors', () => {
  it(`should execute getComments correctly`, (done) => {
    expect(CommentsSelectors.getComments({
      CommentsReducer: 'CommentsReducer',
    })).toMatchSnapshot();

    done();
  });
  it(`should execute getCommentsState correctly`, (done) => {
    expect(CommentsSelectors.getCommentsState({
      CommentsStateReducer: 'CommentsStateReducer',
    })).toMatchSnapshot();

    done();
  });
});
