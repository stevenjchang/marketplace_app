const GET_LISTINGS = 'GET_LISTINGS';
const GET_LISTINGS_ERROR = 'GET_LISTINGS_ERROR';

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
