import { createSelector } from 'reselect';

export const getPosts = state => state.PostsReducer.posts;

export const getFilteredPosts = createSelector(
  [getPosts],
  posts => posts,
);
