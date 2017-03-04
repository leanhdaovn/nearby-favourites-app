import { createAction, handleAction } from 'redux-actions';
import reduceReducers from 'reduce-reducers';
import { get } from 'lodash/fp'
import RNGooglePlaces from 'react-native-google-places';

const openSearchModal = (callback) => {
  RNGooglePlaces.openAutocompleteModal()
  .then((place) => {
    callback(place);
  })
  .catch(error => { console.log(error) });  // error is a Javascript Error object
}

const CHANGE_LOCATION = 'Location/CHANGE_LOCATION';

export const locationSelector = get('location');
export const createChangeLocationAction = createAction(CHANGE_LOCATION);
export const changeLocationReducer = handleAction(createChangeLocationAction, (state, action) => {
  return action && action.payload ? action.payload : state;
}, null);
export default changeSuburbReducer;
