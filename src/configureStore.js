import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

export default configureStore = (preloadedState) => createStore(
  rootReducer,
  preloadedState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);
