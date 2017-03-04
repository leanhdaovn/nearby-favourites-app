import React, { Component} from 'react';
import { View, Text, ListView } from 'react-native';
import PlaceListItem from '../PlaceListItem';
import styles from '../../styles';

const ListViewWithLoading = ({places, loading}) => (
  <View>
    { loading ? <Text style={styles.loadingText}>Loading...</Text> : null }
    <ListView
      enableEmptySections={true}
      dataSource={places}
      renderRow={(place) => (
        <PlaceListItem place={place} />
      )}
      styles={styles.listView}
    />
  </View>
)

export default ListViewWithLoading;