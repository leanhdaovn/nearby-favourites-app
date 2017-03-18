import { createAction } from 'redux-actions';

export const LOAD_PLACES_START_ACTION = 'nearbyPlaces/LOAD_PLACES_START_ACTION'
export const LOAD_PLACES_SUCCESS_ACTION = 'nearbyPlaces/LOAD_PLACES_SUCCESS_ACTION'
export const LOAD_PLACES_ERROR_ACTION = 'nearbyPlaces/LOAD_PLACES_ERROR_ACTION'

export const createLoadPlacesStartAction = createAction(LOAD_PLACES_START_ACTION);
export const createLoadPlacesSuccessAction = createAction(LOAD_PLACES_SUCCESS_ACTION);
export const createLoadPlacesErrorAction = createAction(LOAD_PLACES_ERROR_ACTION);

let placeCache = {};

const loadPlaces = (lat, lng, dispatch) => {
  const cacheKey = `${lat},${lng}`;
  let places = placeCache[cacheKey];

  if (places) {
    dispatch(createLoadPlacesSuccessAction({ places }));
    return;
  }

  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&name=starbucks&rankby=distance&key=AIzaSyAN0XX-AZzMOKnssHEBjnh8u-QwP9SqTLc`;

  fetch(url, {method: "GET"})
    .then((response) => response.json())
    .then((responseData) => {
      places = responseData.results;
      placeCache[cacheKey] = places;
      dispatch(createLoadPlacesSuccessAction({ places }));
    })
    .done();
};

export const loadPlacesNearby = location => dispatch => {
  dispatch(createLoadPlacesStartAction());
  if (location) {
    loadPlaces(location.latitude, location.longitude, dispatch);
  } else {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        loadPlaces(position.coords.latitude, position.coords.longitude, dispatch);
      },
      (error) => dispatch(createLoadPlacesErrorAction({ error })),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }
};

export default {
  loadPlacesNearby,
  createLoadPlacesStartAction,
  createLoadPlacesSuccessAction,
  createLoadPlacesErrorAction
};
