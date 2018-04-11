import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Category extends Component {

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
            pathname: `/`
          }}
        />
      )
    }
    return (
      <div>
          <h2>Category</h2>
          <button onClick={this.handleSubmit}>Home</button>
      </div>
    );
  }
}


export default Category;