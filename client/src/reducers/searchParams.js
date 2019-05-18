const SET_SEARCH_PARAMS = 'SET_SEARCH_PARAMS';

const searchParams = (state = [], action) => {
  switch (action.type) {
    case SET_SEARCH_PARAMS:
      return action.data;
    default:
      return state;
  }
};

export default searchParams;
