import {combineReducers} from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import tracks from './tracks';

const rootReducer = combineReducers({
  tracks,
  routing
});

export default rootReducer;