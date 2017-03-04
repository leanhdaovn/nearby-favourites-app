import React from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';

const placePhotoUrl = (place) => {
  const photo = place.photos ? place.photos[0] : null;
  const photoReference = photo ? photo.photo_reference : null;
  const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&maxheight=160&photoreference=${photoReference}&key=AIzaSyAN0XX-AZzMOKnssHEBjnh8u-QwP9SqTLc`;
  return url;
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({
    style: {width: 100, height: 80},
    source: {uri: placePhotoUrl(ownProps.place)}
  }, stateProps, dispatchProps, ownProps);
}

const PlaceImage = connect(null, null, mergeProps)(Image);

export default PlaceImage;
