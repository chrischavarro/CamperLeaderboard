import { combineReducers } from 'redux';
import CamperReducer from './reducer_camper';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  campers30Days: CamperReducer
});

export default rootReducer;
