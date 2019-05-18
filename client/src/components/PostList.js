import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getPosts } from '../actions';
import { sampleData } from '../sample_data';
import PostDetail from './PostDetail';
import Search from './Search';


const PostList = ({ posts, getPosts }) => {
  console.log('sampleData ==>', sampleData);
  const data = JSON.parse(sampleData).data;
  console.log('data ==>', data.listings.map(item => '1'));

  return (
    <>
      <Search />
      {
        data.listings.map((item) => {
          return (<PostDetail listing={item} />)
        })
      }
    </>
  )
}

PostList.propTypes = {
}

const mapStateToProps = (state) => ({
  posts: state.posts,
});

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(getPosts()),
});

const PostListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
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
