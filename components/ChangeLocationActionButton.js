import React from 'react';
import ActionButton from './ActionButton';

import RNGooglePlaces from 'react-native-google-places';

const openSearchModal = (callback) => {
  RNGooglePlaces.openAutocompleteModal()
  .then((place) => {
    callback(place);
  })
  .catch(error => { console.log(error) });  // error is a Javascript Error object
}

const ChangeLocationActionButton = ({onPlaceReturn}) => (
  <ActionButton
    title="Change Location"
    onPress={() => openSearchModal(onPlaceReturn)}
  />
)

export default ChangeLocationActionButton;
