import {
  HomePage
} from '../components/home';
import {
  Product
} from '../components/product';
import {
  Category
} from '../components/category';

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
        component: Product,
        path: '/product'
      },

      {
        component: Category,
        path: '/category'
      },

      {
        component: NotFound
      }
    ]
  }
];

export default routes;