import React, { Component } from 'react';
import {
  Footer,
  Header
} from '../layouts'

class HomePage extends Component {

  render() {
    return (
      <div>
        <Header />
          <div>
            <h2>HomePage</h2>
          </div>
        <Footer />
      </div>
    );
  }
}


export default HomePage;