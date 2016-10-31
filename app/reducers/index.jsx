import { combineReducers } from 'redux';
import { LOAD_STARS } from './action-creators';

const initialState = {stars: []}

const rootReducer = function(state = initialState, action) {
  switch(action.type) {
    case LOAD_STARS: return Object.assign({}, state, {stars: state.stars.concat(action.stars)});
    default: return state
  }
};

export default rootReducer
