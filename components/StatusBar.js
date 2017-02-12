import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import styles from '../styles';

const StatusBar = ({title}) => (
  <View>
    <View style={styles.statusbar}/>
    <View style={styles.navbar}>
      <Text style={styles.navbarTitle}>{title}</Text>
    </View>
  </View>
);

export default StatusBar;
