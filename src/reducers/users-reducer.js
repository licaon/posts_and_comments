import clone from 'clone';

import { ADD_USER } from 'src/constants/action-types';

const initialState = {
  users: [],
};

// Reducer that keeps track of all Users
function UsersReducer(state = initialState, action) {
  Object.freeze(state);
  const newState = clone(state);

  switch (action.type) {
    case ADD_USER: {
      return Object.assign({}, newState, {
        users: newState.users.concat(action.payload),
      });
    }
    default:
      return newState;
  }
}

export default UsersReducer;
