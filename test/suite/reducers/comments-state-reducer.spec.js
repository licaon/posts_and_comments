import { TOGGLE_COMMENTS } from 'src/constants/action-types';
import CommentsStateReducer from 'src/reducers/comments-state-reducer';

describe('CommentsStateReducer', () => {
  it(`should update reducer correctly on ${TOGGLE_COMMENTS}`, (done) => {
    expect(CommentsStateReducer(
      {
        1: true,
        2: true,
      },
      {
        type: TOGGLE_COMMENTS,
        payload: {
          postId: 1,
        },
      },
    )).toMatchSnapshot();
    done();
  });
  it(`should return reducer correctly on unknown action`, (done) => {
    expect(CommentsStateReducer(
      undefined,
      { type: 'unknown' },
    )).toMatchSnapshot();
    done();
  });
});
