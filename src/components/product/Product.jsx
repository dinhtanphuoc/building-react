import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Product extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    isRedirect: false,
  }

  handleSubmit() {
    this.setState({isRedirect: true});
  }

  render() {
    if (this.state.isRedirect) {
      return (
        <Redirect
          push
          to={{
            pathname: `/category`
          }}
        />
      )
    }
    return (
      <div>
          <h2>Product</h2>
          <button onClick={this.handleSubmit}>Category</button>
      </div>
    );
  }
}


export default Product;