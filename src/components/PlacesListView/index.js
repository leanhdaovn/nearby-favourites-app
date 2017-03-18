import React from 'react';
import { connect } from 'react-redux';
import ListViewWithLoading from '../ListViewWithLoading';
import { loadPlacesNearby } from './actions';
import { placesSelector } from './selectors';

const PlacesListView = connect(
  (state) => ({
    places: placesSelector(state)
  }),
  (dispatch, { location }) => ({
    loadPlaces: dispatch(loadPlacesNearby(location))
  })
)(ListViewWithLoading);

export default PlacesListView;
