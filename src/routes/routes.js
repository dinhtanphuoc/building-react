import {
  MasterLayout,
  HomePage
} from '../container/HomePage';
import {
  App,
  ErrorPage
} from '../container/Main';

const routes = [
  {
    component: App,
    routes: [
      {
        component: HomePage,
        path: '/'
      },

      {
        component: MasterLayout,
        path: '/home'
      },

      {
        component: ErrorPage
      }
    ]
  }
];

export default routes;