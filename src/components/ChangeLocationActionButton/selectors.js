import get from 'lodash/fp/get';

export const selectedLocationSelector = state => get('location.selectedLocation')(state);

export default {
  selectedLocationSelector
};
