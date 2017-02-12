import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import styles, { constants } from '../styles';

const ListItem = ({item, onPress}) => (
  <TouchableHighlight onPress={onPress}>
    <View style={styles.li}>
      <Text style={styles.liText}>{item.vicinity}</Text>
      <Text style={styles.liText}>Rating: {item.rating}</Text>
      <Text style={styles.liText}>Coords: {item.geometry.location.lat},{item.geometry.location.lng}</Text>
    </View>
  </TouchableHighlight>
)

export default ListItem;
