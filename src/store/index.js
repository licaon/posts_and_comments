import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import sagas from 'src/sagas';
import rootReducer from 'src/reducers';

const sagaMiddleware = createSagaMiddleware();

const initialState = {};

// Centralized application state
const store = createStore(rootReducer, initialState, composeWithDevTools(
  // Middleware we want to use in development:
  applyMiddleware(sagaMiddleware),
));

sagaMiddleware.run(sagas);

export default store;
