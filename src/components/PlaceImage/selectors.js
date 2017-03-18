import get from 'lodash/fp/get';

const placePhotoUrl = (googleApiKey, place) => {
  const photo = place.photos ? place.photos[0] : null;
  const photoReference = photo ? photo.photo_reference : null;
  const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&maxheight=160&photoreference=${photoReference}&key=${googleApiKey}`;
  return url;
  // console.log(url);
  // return '_';
};

const photoUrlSelector =
