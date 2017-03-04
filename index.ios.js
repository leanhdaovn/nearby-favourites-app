import React, { Component} from 'react';
import { AppRegistry, View } from 'react-native';
import StatusBar from './components/StatusBar';
import ChangeLocationActionButton from './components/ChangeLocationActionButton';
import PlacesListView from './components/PlacesListView';
import styles from './styles'

export default class NearbyStarbucks extends Component {
  constructor() {
    super();
    this.state = {
      selectedLocation: null
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar title="Nearby Starbucks Coffee" />
        <ChangeLocationActionButton
          onPlaceReturn={(place) => {
            this.setState({
              selectedLocation: place
            })
          }}
        />
        <PlacesListView selectedLocation={this.state.selectedLocation}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('NearbyStarbucks', () => NearbyStarbucks);
