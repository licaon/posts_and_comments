import { GET_POSTS, ADD_POST } from 'src/constants/action-types';

export const getPosts = (payload = {}) => ({
  type: GET_POSTS,
  payload,
});

export const addPost = (payload = []) => ({
  type: ADD_POST,
  payload,
});
