import { createSelector } from 'reselect';
import get from 'lodash/fp/get';

export const placesSelector = state => get('nearbyPlaces.places')(state);
export const loadPlacesStateSelector = state => get('nearbyPlaces.loadPlacesState')(state);
export const placesLoadingSelector = createSelector(
  loadPlacesStateSelector,
  loadPlacesState => (loadPlacesState == 'started')
)

export default {
  placesSelector
};
