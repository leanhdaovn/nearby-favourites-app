import get from 'lodash/fp/get';

export const placesSelector = state => get('nearbyPlaces.places')(state)

export default selectors = {
  placesSelector
};
