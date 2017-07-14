import { createSelector } from 'reselect';
import { intersectionWith } from 'lodash';

import { getSearchFiltersValue, getSelectFiltersValue } from 'src/selectors/filters-selectors';

export const getPosts = state => state.PostsReducer.posts;

export const getPostsFilterBySearch = createSelector(
  [getPosts, getSearchFiltersValue],
  (posts, searchFilters) => {
    const searchedPosts = posts.filter((post) => {
      const searchByFilters = Object.keys(searchFilters);
      for (let i = 0; i < searchByFilters.length; i += 1) {
        const { fields, value } = searchFilters[searchByFilters[i]];
        let containsValue = false;
        for (let j = 0; j < fields.length; j += 1) {
          containsValue = !!(~post[fields[j]].toLowerCase().indexOf(value.toLowerCase()));
          if (containsValue) {
            break;
          }
        }
        if (!containsValue) {
          return false;
        }
      }
      return true;
    });
    return searchedPosts;
  },
);

export const getPostsFilteredBySelect = createSelector(
  [getPosts, getSelectFiltersValue],
  (posts, searchFilters) => {
    const searchedPosts = posts.filter((post) => {
      const searchByFilters = Object.keys(searchFilters);
      for (let i = 0; i < searchByFilters.length; i += 1) {
        const { fields, value } = searchFilters[searchByFilters[i]];
        let containsValue = false;
        for (let j = 0; j < fields.length; j += 1) {
          containsValue = post[fields[j]] == value || value === ''; // eslint-disable-line eqeqeq
          if (containsValue) {
            break;
          }
        }
        if (!containsValue) {
          return false;
        }
      }
      return true;
    });
    return searchedPosts;
  },
);

export const getFilteredPosts = createSelector(
  [getPostsFilterBySearch, getPostsFilteredBySelect],
  (postsFilterBySearch, postsFilteredBySelect) => {
    const intersection = intersectionWith(
      postsFilterBySearch,
      postsFilteredBySelect,
      (a, b) => a.id === b.id,
    );
    return intersection;
  },
);
