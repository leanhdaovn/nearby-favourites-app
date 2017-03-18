import { handleActions } from 'redux-actions';
import {
  createLoadPlacesStartAction,
  createLoadPlacesSuccessAction,
  createLoadPlacesErrorAction
} from './actions';

const reducers = handleActions({
  [createLoadPlacesStartAction]: (state) => ({
    ...state,
    loadPlacesState: 'started'
  }),
  [createLoadPlacesSuccessAction]: (state, action) => {
    return {
      loadPlacesState: 'finished',
      places: action.payload.places
    }
  },
  [createLoadPlacesErrorAction]: (state) => ({
    ...state,
    loadPlacesState: 'finished'
  })
}, {
  loadPlacesState: 'finished',
  places: []
});

export default reducers;
