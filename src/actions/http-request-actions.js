import { START_LOADING_DATA, END_LOADING_DATA } from 'src/constants/action-types';

export const startLoadingData = (payload = {}) => ({
  type: START_LOADING_DATA,
  payload,
});

export const doneLoadingData = (payload = {}) => ({
  type: END_LOADING_DATA,
  payload,
});
