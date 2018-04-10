import React from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-router/Switch';
import Route from 'react-router/Route';

const renderRouters = ({ routes, history }) => {
  return (
    <Switch>
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
    </Switch>
  )
}

renderRouters.propTypes = {
  routes: PropTypes.array.isRequired,
  history: PropTypes.object
}

export default renderRouters;