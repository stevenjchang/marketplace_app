import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _isEmpty from 'lodash.isempty';

import { getListings } from '../actions';
import PostDetail from './PostDetail';
import Search from './Search';

const filterListings = (listings, searchParams) => {
  if (_isEmpty(searchParams)) return listings;
  return listings.filter((item) => {
    for (let [param, value] of Object.entries(searchParams)) {
      if (item[param] !== value) return false
      return true
    }
  })
}


const PostList = ({ listings, searchParams, getListings }) => {
  getListings()
  const filtered = filterListings(listings, searchParams)
  return (
    <>
      <Search />
      {
        filtered.map((item) => {
          return (<PostDetail listing={item} />)
        })
      }
    </>
  )
}

PostList.propTypes = {

}

const mapStateToProps = (state) => ({
  listings: state.listings,
  searchParams: state.searchParams,
});

const mapDispatchToProps = (dispatch) => ({
  getListings: () => dispatch(getListings()),
});

const PostListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostList);

export default PostListContainer;

/*
price range
currency
location/region/area/neighborhood
bedrooms
private room/shared room
available date
contract length
poster last active
poster responds
entire house?


lets start simpler, with:
price range
bedrooms
*/
