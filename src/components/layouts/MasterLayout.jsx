import React, { Component } from 'react';
import {
  Footer,
  Header
} from '../layouts';

class HomePage extends Component {

  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />
          {children}
        <Footer />
      </div>
    );
  }
}


export default HomePage;