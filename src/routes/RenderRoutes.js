import React from 'react';
import PropTypes from 'prop-types';
import Route from 'react-router/Route';
import ConnectedSwitch from './connectedSwitch';
import withRouter from 'react-router/withRouter';
import { connect } from 'react-redux';

const renderRoutes = ({ routes, history, location }) => {
  return (
    <ConnectedSwitch>
      {routes.map((route, i) => (
        <Route
          key={i}
          path={route.path}
          history={history}
          exact
          render={() => (
            <route.component route={route}/>
          )}
        />
      ))}
    </ConnectedSwitch>
  )
}

renderRoutes.propTypes = {
  routes: PropTypes.array.isRequired,
  history: PropTypes.object
}

const mapStateToProps = state => ({});

export default withRouter(connect(mapStateToProps, null)(renderRoutes));
