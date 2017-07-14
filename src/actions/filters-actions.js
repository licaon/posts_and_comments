import { ADD_SEARCH_FILTER, ADD_SELECT_FILTER } from 'src/constants/action-types';

export const addSearchFilter = (payload = {}) => ({
  type: ADD_SEARCH_FILTER,
  payload,
});

export const addSelectFilter = (payload = {}) => ({
  type: ADD_SELECT_FILTER,
  payload,
});
