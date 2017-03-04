import React from 'react';
import { connect } from 'react-redux';
import RNGooglePlaces from 'react-native-google-places';
import ActionButton from '../common/ActionButton';

const openSearchModal = (callback) => {
  RNGooglePlaces.openAutocompleteModal()
  .then((place) => {
    callback(place);
  })
  .catch(error => { console.log(error) });  // error is a Javascript Error object
}

const mapStateToProps = (state, {onPlaceReturn}) => ({
  title: 'Change Location',
  onPress: () => openSearchModal(onPlaceReturn)
});

const ChangeLocationActionButton = connect(mapStateToProps)(ActionButton);

export default ChangeLocationActionButton;
