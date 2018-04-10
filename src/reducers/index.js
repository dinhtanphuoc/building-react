import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux'
import { AUTH_DISCARD_TOKEN } from '../constants/actionsType';
/* ------ */

const appReducer = combineReducers({
  routing
});

const rootReducer = (state, action) => {
  if (action.type === AUTH_DISCARD_TOKEN) {
    const { routing } = state;
    state = { routing };
  }

  return appReducer(state, action);
}

export default rootReducer;