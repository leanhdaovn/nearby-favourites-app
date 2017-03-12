import { createStore} from 'redux';
import rootReducer from './rootReducer';

export default configureStore = (preloadedState) => createStore(
  rootReducer,
  preloadedState
);
