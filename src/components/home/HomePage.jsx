import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class HomePage extends Component {

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
            pathname: `/product`
          }}
        />
      )
    }
    return (
      <div>
          <h2>HomePage</h2>
          <button onClick={this.handleSubmit}>product</button>
      </div>
    );
  }
}


export default HomePage;