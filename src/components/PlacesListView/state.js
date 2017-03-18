import { createAction, handleActions } from 'redux-actions';

export const LOAD_PLACES_ACTION_START = 'nearbyPlaces/LOAD_PLACES_ACTION_START'
export const LOAD_PLACES_ACTION_SUCCESS = 'nearbyPlaces/LOAD_PLACES_ACTION_SUCCESS'
export const LOAD_PLACES_ACTION_ERROR = 'nearbyPlaces/LOAD_PLACES_ACTION_ERROR'

export const createLoadPlacesStartAction = createAction(LOAD_PLACES_ACTION_START);
export const createLoadPlacesSuccessAction = createAction(LOAD_PLACES_ACTION_SUCCESS);
export const createLoadPlacesErrorAction = createAction(LOAD_PLACES_ACTION_ERROR);

export const placesSelector = state => state.nearbyPlaces.places

export const nearbyPlacesReducer = handleActions({
  [createLoadPlacesStartAction]: (state) => ({
    ...state,
    loadPlacesState: 'started'
  }),
  [createLoadPlacesSuccessAction]: (state, action) => {
    return {
      loadPlacesState: 'finished',
      places: action.payload.places
    }
  },
  [createLoadPlacesErrorAction]: (state) => ({
    ...state,
    loadPlacesState: 'finished'
  })
}, {
  loadPlacesState: 'finished',
  places: []
});

export default nearbyPlacesReducer;
