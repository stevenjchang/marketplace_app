import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getListings } from '../actions';
import PostDetail from './PostDetail';
import Search from './Search';


const PostList = ({ listings, getListings }) => {
  getListings()
  return (
    <>
      <Search />
      {
        listings.map((item) => {
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
