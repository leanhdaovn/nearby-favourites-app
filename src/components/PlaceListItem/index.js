import React from 'react';
import { connect } from 'react-redux';
import { Linking } from 'react-native';
import PlaceListItemPresentation from './PlaceListItemPresentation';

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

const mapStateToProps = (state, {place}) => ({
    onPress: () => onPlacePress(place)
});

const PlaceListItem = connect(mapStateToProps)(PlaceListItemPresentation);

export default PlaceListItem;
