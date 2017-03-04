import { combineReducers } from 'redux';
import reduceReducers from 'reduce-reducers';
// import { reducer as formReducer } from 'redux-form';

// import { reducer as userFilterReducer, searchStringPath } from './UserFilter/state';
// import { changeSuburbReducer } from './SuburbSelect/state';
// import { usersReducer, suburbsReducer } from './reducers';

const apiReducer = (state, action) => {
  return state || {
    googleApiKey: 'AIzaSyAN0XX-AZzMOKnssHEBjnh8u-QwP9SqTLc'
  };
};

export default combineReducers({
  api: apiReducer
});
