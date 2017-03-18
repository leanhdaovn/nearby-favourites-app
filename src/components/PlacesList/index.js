import React from 'react';
import { connect } from 'react-redux';
import PlacesListView from '../PlacesListView';
import { locationSelector } from '../ChangeLocationActionButton/state';

const PlacesList = connect(
  (state) => ({
    location: locationSelector(state)
  })
)(PlacesListView);

export default PlacesList;
