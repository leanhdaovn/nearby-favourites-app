import React from 'react';
import { connect } from 'react-redux';
import RNGooglePlaces from 'react-native-google-places';
import {
  createChangeLocationStartAction,
  createChangeLocationSuccessAction,
  createChangeLocationErrorAction
} from './actions';
import ActionButton from '../common/ActionButton';

const openSearchModal = () => dispatch => {
  dispatch(createChangeLocationStartAction());
  RNGooglePlaces.openAutocompleteModal()
  .then(place => {
    dispatch(createChangeLocationSuccessAction({place}))
  })
  .catch(error => { dispatch(createChangeLocationSuccessAction(error)) });
}

const mapDispatchToProps = (dispatch) => ({
  title: 'Change Location',
  onPress: () => dispatch(openSearchModal())
});

const ChangeLocationActionButton = connect(null, mapDispatchToProps)(ActionButton);

export default ChangeLocationActionButton;
