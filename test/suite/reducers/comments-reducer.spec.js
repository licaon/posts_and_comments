import { ADD_COMMENTS, DELETE_POST } from 'src/constants/action-types';
import CommentsReducer from 'src/reducers/comments-reducer';

describe('CommentsReducer', () => {
  it(`should update reducer correctly on ${ADD_COMMENTS}`, (done) => {
    expect(CommentsReducer(
      undefined,
      {
        type: ADD_COMMENTS,
        payload: {
          postId: 1,
          comments: [2],
        },
      },
    )).toMatchSnapshot();
    done();
  });
  it(`should update reducer correctly on ${DELETE_POST}`, (done) => {
    expect(CommentsReducer(
      {
        2: 'to delete',
      },
      {
        type: DELETE_POST,
        payload: {
          id: 2,
        },
      },
    )).toMatchSnapshot();
    done();
  });
  it(`should return reducer correctly on unknown action`, (done) => {
    expect(CommentsReducer(
      undefined,
      { type: 'unknown' },
    )).toMatchSnapshot();
    done();
  });
});
