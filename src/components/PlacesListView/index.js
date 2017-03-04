import React, { Component} from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListViewWithLoading from '../ListViewWithLoading';
import SamplePlaces from '../../SamplePlaces';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
var placeCache = {};

// const loadPlaces = (lat, lng) => {
//   // this.setState({places: ds.cloneWithRows([]), loading: true})
//   const cacheKey = `${lat},${lng}`;
//   var places = placeCache[cacheKey];
//
//   if (places) {
//     this.setState({places: ds.cloneWithRows(places), loading: false})
//     return;
//   }
//
//   const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&name=starbucks&rankby=distance&key=AIzaSyAN0XX-AZzMOKnssHEBjnh8u-QwP9SqTLc`;
//
//   const that = this;
//
//   fetch(url, {method: "GET"})
//     .then((response) => response.json())
//     .then((responseData) => {
//       places = responseData.results;
//       placeCache[cacheKey] = places;
//       that.setState({places: ds.cloneWithRows(places), loading: false})
//     })
//     .done();
// };
//
// const loadPlacesNearby = (location) => {
//   if (location) {
//     loadPlaces(location.latitude, location.longitude);
//   } else {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         loadPlaces(position.coords.latitude, position.coords.longitude);
//       },
//       (error) => console.log(error),
//       {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
//     );
//   }
// }

const mapStateToProps = (state) => ({
  places: ds.cloneWithRows(SamplePlaces),
  loading: state.loading
});

const PlacesListView = connect(mapStateToProps)(ListViewWithLoading)

export default PlacesListView;
