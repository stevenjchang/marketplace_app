import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setSearchParams } from '../actions';

class Search extends Component {
  state = {
    bedrooms: 1,
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = () => {
    this.props.setSearchParams(this.state);
  }

  render() {
    return (
      <>
        <input
          name="price"
          type="text"
          placeholder="Minimum Price"
          onChange={this.onChange}
        />
        <input
          name="bedrooms"
          type="text"
          placeholder="# of bedrooms"
          onChange={this.onChange}
        />
        <input
          name="area"
          type="text"
          placeholder="area"
          onChange={this.onChange}
        />
        <button
          onClick={this.handleSubmit}
        >Search
        </button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  setSearchParams: (searchParams) => dispatch(setSearchParams(searchParams)), 
});

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);

export default SearchContainer;
