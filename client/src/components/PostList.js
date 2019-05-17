import React from 'react';
import PropTypes from 'prop-types';
import { sampleData } from '../sample_data'

const PostList = ({ posts, getPosts }) => {
  console.log('sampleData ==>', sampleData);
  return (
    <>
      <input type="text" value="Search" />

    </>
  )
}

PostList.propTypes = {
}

export default PostList;

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
