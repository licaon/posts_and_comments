import clone from 'clone';
import { START_LOADING_DATA, END_LOADING_DATA } from 'src/constants/action-types';

const initialState = {
  loading: false,
};

// Reducer that keeps track of all HTTP requests
function HttpRequestReducer(state = initialState, action) {
  Object.freeze(state);
  const newState = clone(state);

  switch (action.type) {
    case START_LOADING_DATA: {
      return Object.assign({}, newState, {
        loading: true,
      });
    }
    case END_LOADING_DATA: {
      return Object.assign({}, newState, {
        loading: false,
      });
    }
    default:
      return newState;
  }
}

export default HttpRequestReducer;
