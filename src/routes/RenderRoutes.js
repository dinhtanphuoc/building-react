import React from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-router/Switch';
import Route from 'react-router/Route';

const RenderRouters = ({ routes, history }) => {

  return (
    <Switch>
      {routes.map((route, i) => (
        <Route
          key={i}
          path={route.path}
          history={history}
          exact
          render={() => (
            <div>
              <route.component route={route}/>
            </div>
          )}
        />
      ))}
    </Switch>
  )
}

RenderRouters.propTypes = {
  routes: PropTypes.array.isRequired,
  history: PropTypes.object
}

export default RenderRouters;