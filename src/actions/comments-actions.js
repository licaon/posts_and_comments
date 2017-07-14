import { GET_COMMENTS, ADD_COMMENTS, TOGGLE_COMMENTS } from 'src/constants/action-types';

export const getComments = (payload = {}) => ({
  type: GET_COMMENTS,
  payload,
});

export const addComments = (payload = []) => ({
  type: ADD_COMMENTS,
  payload,
});

export const toggleCommentsState = (payload = {}) => ({
  type: TOGGLE_COMMENTS,
  payload,
});
