import axios from 'axios';
import { sampleData } from '../sample_data';
const listings = JSON.parse(sampleData).data.listings;

const GET_LISTINGS = 'GET_LISTINGS';

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
    dispatch({ type: GET_LISTINGS, data: listings })
  }
};
