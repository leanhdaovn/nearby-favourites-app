import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../styles';

const PlaceShortInfo = ({place}) => (
  <View style={{marginLeft: 10}}>
    <Text style={styles.liText}>{place.name}</Text>
    <Text style={styles.liText}>{place.vicinity}</Text>
    <Text style={styles.liText}>Rating: {place.rating}</Text>
  </View>
)

export default PlaceShortInfo;
