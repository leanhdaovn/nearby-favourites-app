import get from 'lodash/fp/get';

export const googleApiKeySelector = state => get('api.googleApiKey')(state);

export default {
  googleApiKeySelector
};
