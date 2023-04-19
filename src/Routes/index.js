import Home from '~/pages/Home';
import Contact from '~/pages/Contact';

// Public Route
const publicRoute = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/contact',
    component: Contact,
    layout: null,
  },
];

// Private Route
const privateRoute = [];

export { publicRoute, privateRoute };
