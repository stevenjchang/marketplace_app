import React, { Component } from 'react';
import axios from 'axios';

class AddListing extends Component {
  state = {}

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = () => {
    axios.get('/api', this.state)
    .then(res =>  { console.log('success', res)})
    .catch(err => { console.log('err ==>', err);})
    // send this.state to server
    // this.props.history.push(`/posts`)
  }

  render() {
    return (
      <>
        <input
          name="title"
          type="text"
          placeholder="Title"
          onChange={this.handleChange}
        />
        <input
          name="price"
          type="text"
          placeholder="Minimum Price"
          onChange={this.handleChange}
        />
        <input
          name="bedrooms"
          type="text"
          placeholder="# of bedrooms"
          onChange={this.handleChange}
        />
        <input
          name="area"
          type="text"
          placeholder="area"
          onChange={this.handleChange}
        />
        <button
          onClick={this.handleSubmit}
        >Add
        </button>
      </>
    );
  }
}

export default AddListing;
