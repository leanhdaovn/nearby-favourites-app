import React, { Component} from 'react';
import {
  AppRegistry,
  ListView,
  Text,
  View,
  Linking,
} from 'react-native';

import StatusBar from './components/StatusBar';
import ActionButton from './components/ActionButton';
import ListItem from './components/ListItem';

import styles from './styles';

import RNGooglePlaces from 'react-native-google-places';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

var placeCache = {};

const loadPlaces = (lat, lng, callback) => {
  const cacheKey = `${lat},${lng}`;
  var places = placeCache[cacheKey];

  if (places) {
    callback(places);
    return;
  }

  console.log('load places');
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&name=starbucks&rankby=distance&key=AIzaSyAN0XX-AZzMOKnssHEBjnh8u-QwP9SqTLc`;

  fetch(url, {method: "GET"})
    .then((response) => response.json())
    .then((responseData) => {
      places = responseData.results;
      callback(places);
      placeCache[cacheKey] = places;
    })
    .done();
}

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

export default class NearbyStarbucks extends Component {
  constructor() {
    super();
    this.state = {
      places: ds.cloneWithRows([]),
      radius: 500,
      selectedLocation: null,
      loading: true
    };

    Linking.canOpenURL('comgooglemaps://').then(supported => {
      this.setState({googleMapsSupported: supported ? 'true' : 'fasle'})
    });

    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({loading: true});
        loadPlaces(position.coords.latitude, position.coords.longitude, (places) => {
          this.setState({places: ds.cloneWithRows(places), loading: false});
        })
      },
      (error) => console.log(error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }

  openSearchModal() {
    RNGooglePlaces.openAutocompleteModal()
    .then((place) => {
      this.setState({loading: true});
      loadPlaces(place.latitude, place.longitude, (places) => {
        this.setState({places: ds.cloneWithRows(places), loading: false});
      })
      this.setState({
        selectedLocation: place,
        places: ds.cloneWithRows([])
      })
    })
    .catch(error => { console.log(error) });  // error is a Javascript Error object
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar title="Nearby Starbucks Coffee" />
        <ActionButton title="Change Location" onPress={this.openSearchModal.bind(this)}/>
        { this.state.loading ? <Text>Loading...</Text> : null }
        <ListView
          enableEmptySections={true}
          dataSource={this.state.places}
          renderRow={(place) => (
            <ListItem
              item={place}
              onPress={() => onPlacePress(place)}
            />
          )}
          styles={styles.listView}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('NearbyStarbucks', () => NearbyStarbucks);
