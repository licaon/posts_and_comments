import clone from 'clone';

import { ADD_POST, DELETE_POST } from 'src/constants/action-types';

const initialState = {
  posts: [],
};

// Reducer that keeps track of all Posts
function PostsReducer(state = initialState, action) {
  Object.freeze(state);
  const newState = clone(state);

  switch (action.type) {
    case ADD_POST: {
      return Object.assign({}, newState, {
        posts: newState.posts.concat(action.payload),
      });
    }
    case DELETE_POST: {
      return Object.assign({}, newState, {
        posts: newState.posts.filter(post => post.id !== action.payload.id),
      });
    }
    default:
      return newState;
  }
}

export default PostsReducer;
