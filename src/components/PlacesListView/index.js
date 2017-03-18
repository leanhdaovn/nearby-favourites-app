import React, { Component} from 'react';
import { connect } from 'react-redux';
import ListViewWithLoading from '../ListViewWithLoading';
import SamplePlaces from '../../SamplePlaces';
import { locationSelector } from '../ChangeLocationActionButton/state';
import {
  createLoadPlacesStartAction,
  createLoadPlacesSuccessAction,
  createLoadPlacesErrorAction,
  placesSelector
} from './state';

var placeCache = {};

const loadPlaces = (lat, lng, dispatch) => {
  const cacheKey = `${lat},${lng}`;
  var places = placeCache[cacheKey];

  if (places) {
    dispatch(createLoadPlacesSuccessAction({ places }));
    return;
  }

  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&name=starbucks&rankby=distance&key=AIzaSyAN0XX-AZzMOKnssHEBjnh8u-QwP9SqTLc`;

  fetch(url, {method: "GET"})
    .then((response) => response.json())
    .then((responseData) => {
      places = responseData.results;
      placeCache[cacheKey] = places;
      dispatch(createLoadPlacesSuccessAction({ places }));
    })
    .done();
};

const loadPlacesNearby = location => dispatch => {
  dispatch(createLoadPlacesStartAction);
  if (location) {
    loadPlaces(location.latitude, location.longitude, dispatch);
  } else {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        loadPlaces(position.coords.latitude, position.coords.longitude, dispatch);
      },
      (error) => dispatch(createLoadPlacesErrorAction, { error }),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }
}

const PlacesListView = connect(
  (state) => ({
    places: placesSelector(state)
  }),
  (dispatch, { location }) => ({
    loadPlaces: dispatch(loadPlacesNearby(location))
  })
)(ListViewWithLoading);

export default PlacesListView;
