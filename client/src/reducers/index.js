import { combineReducers } from 'redux';
import listings from './listings';
import posts from './posts';
import searchParams from './searchParams';

const rootReducer = combineReducers({
  listings,
  posts,
  searchParams,
});

export default rootReducer;
