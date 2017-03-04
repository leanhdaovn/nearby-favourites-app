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

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({
    title: 'Change Location',
    onPress: () => openSearchModal(onPlaceReturn)
  }, stateProps, dispatchProps, ownProps);
}

const ChangeLocationActionButton = connect(null, null, mergeProps)(ActionButton);

export default ChangeLocationActionButton;
