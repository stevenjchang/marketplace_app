import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  border: '1px solid red'
}

const PostDetail = ({ listing }) => {
  let { title, price, bedrooms, sharedType } = listing;
  return (
    <>
      <div style={styles}>
        <h3>{title}</h3>
        <p>{price}</p>
        <p>{bedrooms}</p>
        <p>{sharedType}</p>
      </div>
    </>
  )
}

PostDetail.propTypes = {
}

export default PostDetail;
