import { combineReducers } from 'redux';
import classesReducer from '../../features/classes/classesSlice';

const rootReducer = combineReducers({
  classes: classesReducer,
  // other reducers if any
});

export default rootReducer;