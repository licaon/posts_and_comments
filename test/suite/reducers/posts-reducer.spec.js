import {  ADD_POST, DELETE_POST } from 'src/constants/action-types';
import PostsReducer from 'src/reducers/posts-reducer';

describe('PostsReducer', () => {
  it(`should update reducer correctly on ${ADD_POST}`, (done) => {
    expect(PostsReducer(
      {
        posts: [{
          id: 1,
        }],
      },
      {
        type: ADD_POST,
        payload: {
          id: 2,
        },
      },
    )).toMatchSnapshot();
    done();
  });
  it(`should update reducer correctly on ${DELETE_POST}`, (done) => {
    expect(PostsReducer(
      {
        posts: [
          {
            id: 1,
          },
          {
            id: 2,
          },
        ],
      },
      {
        type: DELETE_POST,
        payload: {
          id: 1,
        },
      },
    )).toMatchSnapshot();
    done();
  });
  it(`should return reducer correctly on unknown action`, (done) => {
    expect(PostsReducer(
      undefined,
      { type: 'unknown' },
    )).toMatchSnapshot();
    done();
  });
});
