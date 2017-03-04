import { combineReducers } from 'redux';
import reduceReducers from 'reduce-reducers';
// import { reducer as formReducer } from 'redux-form';

// import { reducer as userFilterReducer, searchStringPath } from './UserFilter/state';
// import { changeSuburbReducer } from './SuburbSelect/state';
// import { usersReducer, suburbsReducer } from './reducers';

const reducer = (state = {}, action) => {
  return state;
};

export default combineReducers({
  // [searchStringPath]: userFilterReducer,
  // users: usersReducer,
  // suburbs: suburbsReducer,
  // form: formReducer,
  // suburb: changeSuburbReducer,
  places: reducer
});
