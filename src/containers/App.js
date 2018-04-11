import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { RenderRoutes } from '../routes';
import { MasterLayout } from '../components/layouts';
import '../assets/styles/bootstrap.min.css';
// import '../assets/styles/main.css';
import '../assets/styles/new.css';
import '../assets/fonts/font-awesome.min.css';
import '../assets/styles/datepicker.css';
import '../assets/styles/bootstrap-timepicker.css';
import '../assets/styles/daterangepicker.css';

export default class App extends Component {

  static propTypes = {
    route: Proptypes.object.isRequired
  }

  render() {
    const { route } = this.props;
    return (
      <MasterLayout>
        <RenderRoutes routes={route.routes}/>
      </MasterLayout>
    );
  }
}