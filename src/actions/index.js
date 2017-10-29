import axios from 'axios';

const SEARCH_URL_30_DAYS = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
export const FETCH_CAMPERS_30_DAYS = 'FETCH_CAMPERS_30_DAYS';
const SEARCH_URL_ALL_TIME = `https://fcctop100.herokuapp.com/api/fccusers/top/alltime`;
export const FETCH_CAMPERS_ALL_TIME = 'FETCH_CAMPERS_ALL_TIME';

export function getCampers30Days() {
  const request = axios.get(`${SEARCH_URL_30_DAYS}`);

  return {
    type: FETCH_CAMPERS_30_DAYS,
    payload: request
  };
}

export function getCampersAllTime() {
  const request = axios.get(SEARCH_URL_ALL_TIME)

  return {
    type: FETCH_CAMPERS_ALL_TIME,
    payload: request
  }
}
