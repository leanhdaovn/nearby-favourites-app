import React from 'react';
import { Text } from 'react-native';
import styles from '../../styles';

const LoadingText = ({loading}) => (
  loading ? <Text style={styles.loadingText}>Loading...</Text> : null
)

export default LoadingText;
