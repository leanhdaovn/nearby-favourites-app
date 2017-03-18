import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

export default configureStore = (preloadedState) => createStore(
  rootReducer,
  preloadedState,
  composeWithDevTools(
    applyMiddleware(logger, thunk)
  )
);
