import { combineReducers } from 'redux';

import HttpRequestReducer from 'src/reducers/http-request-reducer';
import PostsReducer from 'src/reducers/posts-reducer';

const rootReducer = combineReducers({
  HttpRequestReducer,
  PostsReducer,
});

export default rootReducer;
