import { GET_USERS, ADD_USER } from 'src/constants/action-types';

export const getUsers = (payload = {}) => ({
  type: GET_USERS,
  payload,
});

export const addUser = (payload = []) => ({
  type: ADD_USER,
  payload,
});
