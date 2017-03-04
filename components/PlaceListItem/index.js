import React from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableHighlight, Linking, Image } from 'react-native';
import ListItem from './ListItem';

const onPlacePress = (place) => {
  Linking.canOpenURL('comgooglemaps://').then(supported => {
    if (!supported) {
      const appleMapsUrl = `maps://maps.apple.com/?q=${place.name}+${place.vicinity}`;
      Linking.openURL(appleMapsUrl).catch(err => console.error('An error occurred', err));
    } else {
      const googleMapsUrl = `http://maps.google.com/maps?q=${place.name}+${place.vicinity}`;
      Linking.openURL(googleMapsUrl).catch(err => console.error('An error occurred', err));
    }
  });
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({
    onPress: () => onPlacePress(place)
  }, ownProps, stateProps, dispatchProps);
};

const PlaceListItem = connect(null, null, mergeProps)(ListItem);

export default PlaceListItem;
