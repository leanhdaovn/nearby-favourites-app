import React from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { googleApiKeySelector } from '../common/selectors';

const placePhotoUrl = (googleApiKey, place) => {
  const photo = place.photos ? place.photos[0] : null;
  const photoReference = photo ? photo.photo_reference : null;
  const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&maxheight=160&photoreference=${photoReference}&key=${googleApiKey}`;
  return url;
};

const mapStateToProps = (state, {place}) => {
  return {
    style: {width: 100, height: 80},
    source: {uri: placePhotoUrl(googleApiKeySelector(state), place)}
  }
}

const PlaceImage = connect(mapStateToProps)(Image);

export default PlaceImage;
