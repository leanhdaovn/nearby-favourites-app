import React, { Component} from 'react';
import { View, Text, ListView, Linking } from 'react-native';
import PlaceListItem from './PlaceListItem';
import styles from '../styles';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
var placeCache = {};

class PlaceListView extends Component {
  loadPlaces = (lat, lng) => {
    this.setState({places: ds.cloneWithRows([]), loading: true})
    const cacheKey = `${lat},${lng}`;
    var places = placeCache[cacheKey];

    if (places) {
      this.setState({places: ds.cloneWithRows(places), loading: false})
      return;
    }

    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&name=starbucks&rankby=distance&key=AIzaSyAN0XX-AZzMOKnssHEBjnh8u-QwP9SqTLc`;

    const that = this;

    fetch(url, {method: "GET"})
      .then((response) => response.json())
      .then((responseData) => {
        places = responseData.results;
        placeCache[cacheKey] = places;
        that.setState({places: ds.cloneWithRows(places), loading: false})
      })
      .done();
  };

  loadPlacesNearby(place) {
    if (place) {
      this.loadPlaces(place.latitude, place.longitude);
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.loadPlaces(position.coords.latitude, position.coords.longitude);
        },
        (error) => console.log(error),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
      );
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      places: ds.cloneWithRows([]),
      loading: true
    };
    this.loadPlacesNearby(props.selectedLocation);
  }

  componentWillReceiveProps(nextProps) {
    if(JSON.stringify(this.props.selectedLocation) !== JSON.stringify(nextProps.selectedLocation)) {
       this.loadPlacesNearby(nextProps.selectedLocation);
    }
  }

  render() {
    return (
      <View>
        { this.state.loading ? <Text style={styles.loadingText}>Loading...</Text> : null }
        <ListView
          enableEmptySections={true}
          dataSource={this.state.places}
          renderRow={(place) => (
            <PlaceListItem place={place} />
          )}
          styles={styles.listView}
        />
      </View>
    )
  }
}

export default PlaceListView;
