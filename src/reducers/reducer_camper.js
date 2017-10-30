import { RECENT, ALLTIME } from '../actions/';

export default function(state=[], action) {
  switch (action.type) {
    case RECENT:
      return action.payload.data;
    case ALLTIME:
      return action.payload.data;
    default:
      return state;
  }
}
