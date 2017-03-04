import React from 'react';
import { Linking } from 'react-native';
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

const PlaceListItem = ({place}) => (
  <ListItem
    item={place}
    onPress={() => onPlacePress(place)}
  />
)

export default PlaceListItem;
