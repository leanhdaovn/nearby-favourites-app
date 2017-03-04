import React from 'react';
import { Image } from 'react-native';

const placePhotoUrl = (place) => {
  const photo = place.photos ? place.photos[0] : null;
  const photoReference = photo ? photo.photo_reference : null;
  const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&maxheight=160&photoreference=${photoReference}&key=AIzaSyAN0XX-AZzMOKnssHEBjnh8u-QwP9SqTLc`;
  return url;
};

const PlaceImage = ({place}) => (
  <Image
    style={{width: 100, height: 80}}
    source={{uri: placePhotoUrl(place)}}
  />
)

export default PlaceImage;
