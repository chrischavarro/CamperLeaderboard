import { FETCH_CAMPERS_30_DAYS, FETCH_CAMPERS_ALL_TIME } from '../actions/';

export default function(state=[], action) {
  switch (action.type) {
    case FETCH_CAMPERS_30_DAYS:
      return action.payload.data;
    case FETCH_CAMPERS_ALL_TIME:
      // Insert here
    default:
      return state;
  }
}
