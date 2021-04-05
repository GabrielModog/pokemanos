import Home from '../pages/Home';
import Pokemon from '../pages/Pokemon';

const routes = [
  { path: '/', exact: true, component: Home },
  { path: '/pokemon/:pokeid', component: Pokemon },
];

export default routes;
