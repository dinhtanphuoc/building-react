import { BusinessManage } from '../components/business';

import App from '../containers/App';
import NotFound from '../containers/NotFound';

const routes = [
  {
    component: App,
    routes: [
      {
        component: BusinessManage,
        path: '/'
      },

      {
        component: NotFound
      }
    ]
  }
];

export default routes;