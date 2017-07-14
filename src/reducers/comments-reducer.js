import clone from 'clone';

import { ADD_COMMENTS, DELETE_POST } from 'src/constants/action-types';

const initialState = {};

// Reducer that keeps track of all Comments
function CommentsReducer(state = initialState, action) {
  Object.freeze(state);
  const newState = clone(state);

  switch (action.type) {
    case ADD_COMMENTS: {
      const { postId, comments } = action.payload;
      return Object.assign({}, newState, {
        [postId]: comments,
      });
    }
    case DELETE_POST: {
      const { id } = action.payload;
      delete newState[id];
      return newState;
    }
    default:
      return newState;
  }
}

export default CommentsReducer;
