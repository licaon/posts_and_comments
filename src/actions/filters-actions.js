import { ADD_SEARCH_FILTER } from 'src/constants/action-types';

export const addSearchFilter = (payload = {}) => ({
  type: ADD_SEARCH_FILTER,
  payload,
});
