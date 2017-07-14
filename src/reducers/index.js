import { combineReducers } from 'redux';

import HttpRequestReducer from 'src/reducers/http-request-reducer';
import PostsReducer from 'src/reducers/posts-reducer';
import UsersReducer from 'src/reducers/users-reducer';
import SearchReducer from 'src/reducers/search-reducer';

const rootReducer = combineReducers({
  HttpRequestReducer,
  PostsReducer,
  UsersReducer,
  SearchReducer,
});

export default rootReducer;
