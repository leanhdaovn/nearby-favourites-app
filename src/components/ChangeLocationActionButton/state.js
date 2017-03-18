import { createAction, handleActions } from 'redux-actions';
import reduceReducers from 'reduce-reducers';
import { get } from 'lodash/fp'
import RNGooglePlaces from 'react-native-google-places';

const CHANGE_LOCATION_START = 'Location/CHANGE_LOCATION_START';
const CHANGE_LOCATION_SUCCESS = 'Location/CHANGE_LOCATION_SUCCESS';
const CHANGE_LOCATION_ERROR = 'Location/CHANGE_LOCATION_ERROR';

export const locationSelector = get('location');
export const createChangeLocationStartAction = createAction(CHANGE_LOCATION_START);
export const createChangeLocationSuccessAction = createAction(CHANGE_LOCATION_SUCCESS);
export const createChangeLocationErrorAction = createAction(CHANGE_LOCATION_ERROR);

export const changeLocationReducer = handleActions({
  [createChangeLocationStartAction]: (state) => ({
    ...state,
    changeLocationState: 'started'
  }),
  [createChangeLocationSuccessAction]: (state, action) => ({
    changeLocationState: 'finished',
    location: action.payload.place
  }),
  [createChangeLocationErrorAction]: (state) => ({
    ...state,
    changeLocationState: 'finished'
  })
}, {
  changeLocationState: 'finished',
  location: null
});

export default changeLocationReducer;
