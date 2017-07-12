import { combineReducers } from 'redux';
import HttpRequestReducer from 'src/reducers/http-request-reducer';

const rootReducer = combineReducers({
  HttpRequestReducer,
});

export default rootReducer;
