import { combineReducers } from 'redux';
import changeLocationReducer from './components/ChangeLocationActionButton/reducers';
import nearbyPlacesReducer from './components/PlacesList/reducers';

const apiReducer = (state, action) => {
  return state || {
    googleApiKey: 'AIzaSyAN0XX-AZzMOKnssHEBjnh8u-QwP9SqTLc'
  };
};

export default combineReducers({
  api: apiReducer,
  location: changeLocationReducer,
  nearbyPlaces: nearbyPlacesReducer
});
