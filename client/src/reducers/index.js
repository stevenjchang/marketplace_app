import { combineReducers } from 'redux';
import listings from './listings';
import posts from './posts';

const rootReducer = combineReducers({
  listings,
  posts,
});

export default rootReducer;
