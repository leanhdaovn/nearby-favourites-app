import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import styles from '../../styles';
import PlaceImage from '../PlaceImage';
import PlaceShortInfo from './PlaceShortInfo';

const PlaceListItemPresentation = ({place, onPress}) => (
  <TouchableHighlight onPress={onPress}>
    <View style={styles.li}>
      <PlaceImage place={place}/>
      <PlaceShortInfo place={place}/>
    </View>
  </TouchableHighlight>
)

export default PlaceListItemPresentation;
