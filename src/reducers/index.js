import { combineReducers } from 'redux';

import HttpRequestReducer from 'src/reducers/http-request-reducer';
import PostsReducer from 'src/reducers/posts-reducer';
import UsersReducer from 'src/reducers/users-reducer';
import FilterSearchReducer from 'src/reducers/filter-search-reducer';
import FilterSelectReducer from 'src/reducers/filter-select-reducer';

const rootReducer = combineReducers({
  HttpRequestReducer,
  PostsReducer,
  UsersReducer,
  FilterSearchReducer,
  FilterSelectReducer,
});

export default rootReducer;
