import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { RenderRoutes } from '../routes';
import { MasterLayout } from '../components/layouts';
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