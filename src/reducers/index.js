import { combineReducers } from 'redux';

import HttpRequestReducer from 'src/reducers/http-request-reducer';
import PostsReducer from 'src/reducers/posts-reducer';
import SearchReducer from 'src/reducers/search-reducer';

const rootReducer = combineReducers({
  HttpRequestReducer,
  PostsReducer,
  SearchReducer,
});

export default rootReducer;
