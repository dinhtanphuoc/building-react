import React, { Component } from 'react';
import {
  Footer,
  Header,
  TopNav,
  SubNav,
  Row
} from '../layouts';

class HomePage extends Component {

  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />
        <div className="dashboard-container">
          <div className="container">
            <TopNav />
            <SubNav />
            <div className="dashboard-wrapper">
              <div className="left-sidebar">
                <Row />
                {children}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}


export default HomePage;