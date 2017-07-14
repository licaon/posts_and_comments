import clone from 'clone';

import { TOGGLE_COMMENTS } from 'src/constants/action-types';

const initialState = {};

// Reducer that keeps track of comments state, show/hide logic
function CommentsStateReducer(state = initialState, action) {
  Object.freeze(state);
  const newState = clone(state);

  switch (action.type) {
    case TOGGLE_COMMENTS: {
      const { postId } = action.payload;
      return Object.assign({}, newState, {
        [postId]: !newState[postId],
      });
    }
    default:
      return newState;
  }
}

export default CommentsStateReducer;
