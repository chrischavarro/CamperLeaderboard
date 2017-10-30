import axios from 'axios';

const SEARCH_URL = 'https://fcctop100.herokuapp.com/api/fccusers/top/'
export const RECENT = 'RECENT';
export const ALLTIME = 'ALLTIME';

export function getCampers(value) {
  const request = axios.get(`${SEARCH_URL}${value}`)

  return {
    type: value,
    payload: request
  }
}
