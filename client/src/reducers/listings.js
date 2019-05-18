import { GET_LISTINGS, GET_LISTINGS_ERROR } from  '../constants';

const listings = (state = [], action) => {
  switch (action.type) {
    case GET_LISTINGS:
      return action.data;
    case GET_LISTINGS_ERROR:
      return action.err.response;
    default:
      return state;
  }
}

export default listings;
