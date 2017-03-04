import React from 'react';
import { Text, View, TouchableHighlight, Linking, Image } from 'react-native';
import styles, { constants } from '../styles';
import PlaceImage from './PlaceImage';
import PlaceShortInfo from './PlaceShortInfo';

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
  <TouchableHighlight onPress={() => onPlacePress(place)}>
    <View style={styles.li}>
      <PlaceImage place={place}/>
      <PlaceShortInfo place={place}/>
    </View>
  </TouchableHighlight>
)

export default PlaceListItem;
