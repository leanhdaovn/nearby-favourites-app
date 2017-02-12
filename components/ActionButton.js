import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import styles, { constants } from '../styles';

const ActionButton = ({title, onPress}) => (
  <View style={styles.action}>
    <TouchableHighlight
      underlayColor={constants.actionColor}
      onPress={onPress}>
      <Text style={styles.actionText}>{title}</Text>
    </TouchableHighlight>
  </View>
)

export default ActionButton;
