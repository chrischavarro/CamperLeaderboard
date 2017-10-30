import { FETCH_CAMPERS_30_DAYS, FETCH_CAMPERS_ALL_TIME, RECENT } from '../actions/';

export default function(state=[], action) {
  switch (action.type) {
    case RECENT:
      console.log('action received', action.payload)
    case FETCH_CAMPERS_30_DAYS:
      return action.payload.data;
    case FETCH_CAMPERS_ALL_TIME:
      return action.payload.data;
    default:
      return state;
  }
}
