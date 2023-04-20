import Home from '~/pages/Home';
import Contact from '~/pages/Contact';
import { HomeLayout } from '~/components/Layouts';
import Portfolio from '~/pages/Portfolio';
import About from '~/pages/About';

// Public Route
const publicRoute = [
  {
    path: '/',
    component: Home,
    layout: HomeLayout,
  },
  {
    path: '/contact',
    component: Contact,
  },
  {
    path: '/portfolio',
    component: Portfolio,
  },
  {
    path: '/about',
    component: About,
  },
];

// Private Route
const privateRoute = [];

export { publicRoute, privateRoute };
