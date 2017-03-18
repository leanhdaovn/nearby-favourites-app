import { createAction } from 'redux-actions';

const CHANGE_LOCATION_START = 'location/CHANGE_LOCATION_START';
const CHANGE_LOCATION_SUCCESS = 'location/CHANGE_LOCATION_SUCCESS';
const CHANGE_LOCATION_ERROR = 'location/CHANGE_LOCATION_ERROR';

export const createChangeLocationStartAction = createAction(CHANGE_LOCATION_START);
export const createChangeLocationSuccessAction = createAction(CHANGE_LOCATION_SUCCESS);
export const createChangeLocationErrorAction = createAction(CHANGE_LOCATION_ERROR);

export default {
  createChangeLocationStartAction,
  createChangeLocationSuccessAction,
  createChangeLocationErrorAction
};
