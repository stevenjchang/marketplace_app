import React from 'react';
import PropTypes from 'prop-types';
import { sampleData } from '../sample_data';

import PostDetail from './PostDetail';


const PostList = ({ posts, getPosts }) => {
  console.log('sampleData ==>', sampleData);
  const data = JSON.parse(sampleData).data;
  console.log('data ==>', data.listings.map(item => '1'));

  return (
    <>
      <input type="text" value="Search" />
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
