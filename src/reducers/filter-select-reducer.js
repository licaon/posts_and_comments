import clone from 'clone';
import { ADD_SELECT_FILTER } from 'src/constants/action-types';


const initialState = {};

function FilterSelectReducer(state = initialState, action) {
  Object.freeze(state);
  const newState = clone(state);

  switch (action.type) {
    case ADD_SELECT_FILTER: {
      const { payload } = action;
      return Object.assign({}, newState, {
        [payload.type]: {
          value: payload.value,
          fields: payload.fields,
        },
      });
    }
    default:
      return newState;
  }
}

export default FilterSelectReducer;
