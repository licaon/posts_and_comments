import { GET_POSTS, ADD_POST, REQUEST_POST_DELETE, DELETE_POST } from 'src/constants/action-types';

export const getPosts = (payload = {}) => ({
  type: GET_POSTS,
  payload,
});

export const addPost = (payload = []) => ({
  type: ADD_POST,
  payload,
});

export const requestPostDelete = (payload = {}) => ({
  type: REQUEST_POST_DELETE,
  payload,
});

export const confirmPostDelete = (payload = {}) => ({
  type: DELETE_POST,
  payload,
});
