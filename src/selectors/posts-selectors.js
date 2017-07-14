import { createSelector } from 'reselect';

import { getSearchFiltersValue } from 'src/selectors/filters-selectors';

export const getPosts = state => state.PostsReducer.posts;

export const getSearchedPosts = createSelector(
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

export const getFilteredPosts = createSelector(
  [getSearchedPosts],
  searchPosts => searchPosts,
);
