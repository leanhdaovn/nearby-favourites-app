import React from 'react';
import { connect } from 'react-redux';
import ListViewWithLoading from '../ListViewWithLoading';
import { loadPlacesNearby } from './actions';
import {
  placesSelector,
  placesLoadingSelector
} from './selectors';
import { selectedLocationSelector } from '../ChangeLocationActionButton/selectors';

const PlacesListView = connect(
  (state) => ({
    places: placesSelector(state),
    loading: placesLoadingSelector(state)
  }),
  (dispatch, { location }) => ({
    loadPlaces: dispatch(loadPlacesNearby(location))
  })
)(ListViewWithLoading);

const PlacesList = connect(
  (state) => ({
    location: selectedLocationSelector(state)
  })
)(PlacesListView);

export default PlacesList;
