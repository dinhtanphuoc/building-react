import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { RenderRoutes } from '../routes';

export default class App extends Component {

  static propTypes = {
    route: Proptypes.object.isRequired
  }

  render() {
    return (
      <div>
        <RenderRoutes routes={this.props.route.routes}/>
      </div>
    );
  }
}