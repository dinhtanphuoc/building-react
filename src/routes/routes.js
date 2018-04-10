import {
  HomePage
} from '../components/home';

import App from '../containers/App';
import NotFound from '../containers/NotFound';

const routes = [
  {
    component: App,
    routes: [
      {
        component: HomePage,
        path: '/'
      },

      {
        component: NotFound
      }
    ]
  }
];

export default routes;