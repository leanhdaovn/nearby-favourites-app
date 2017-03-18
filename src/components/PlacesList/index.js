import React from 'react';
import { connect } from 'react-redux';
import ListViewWithLoading from '../ListViewWithLoading';
import { loadPlacesNearby } from './actions';
import { placesSelector } from './selectors';
import { locationSelector } from '../ChangeLocationActionButton/state';

const PlacesListView = connect(
  (state) => ({
    places: placesSelector(state)
  }),
  (dispatch, { location }) => ({
    loadPlaces: dispatch(loadPlacesNearby(location))
  })
)(ListViewWithLoading);

const PlacesList = connect(
  (state) => ({
    location: locationSelector(state)
  })
)(PlacesListView);

export default PlacesList;
