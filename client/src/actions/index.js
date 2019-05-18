import axios from 'axios';

import { GET_LISTINGS, SET_SEARCH_PARAMS } from '../constants';
import { sampleData } from '../sample_data';
const listings = JSON.parse(sampleData).data.listings;

export const getPosts = () => {
  return (dispatch, getState) => {
    axios.get('/posts')
    .then((res) => res.data)
    .then((data) => {
      dispatch({ type: 'SET_POSTS', data });
    })
    .catch((err) => {
      dispatch({ type: 'GET_POSTS_ERROR', err });
    })
  }
};

export const getListings = () => {
  return (dispatch, getState) => {
    dispatch({ type: GET_LISTINGS, data: listings });
  }
};

export const setSearchParams = (searchParams) => {
  return (dispatch, getState) => {
    dispatch({ type: SET_SEARCH_PARAMS, data: searchParams });
  }
}
