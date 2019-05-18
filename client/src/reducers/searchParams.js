import { SET_SEARCH_PARAMS } from '../constants';

const searchParams = (state = [], action) => {
  switch (action.type) {
    case SET_SEARCH_PARAMS:
      return action.data;
    default:
      return state;
  }
};

export default searchParams;
