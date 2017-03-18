import { handleActions } from 'redux-actions';
import {
  createChangeLocationStartAction,
  createChangeLocationSuccessAction,
  createChangeLocationErrorAction
} from './actions';

const reducers = handleActions({
  [createChangeLocationStartAction]: (state) => ({
    ...state,
    changeLocationState: 'started'
  }),
  [createChangeLocationSuccessAction]: (state, action) => ({
    changeLocationState: 'finished',
    selectedLocation: action.payload.place
  }),
  [createChangeLocationErrorAction]: (state) => ({
    ...state,
    changeLocationState: 'finished'
  })
}, {
  changeLocationState: 'finished',
  selectedLocation: null
});

export default reducers;
