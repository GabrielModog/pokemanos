import Home from '../pages/Home';
import Pokemon from '../pages/Pokemon';

const routes = [
  { path: '/', exact: true, component: Home },
  { path: '/pokemon/:id', component: Pokemon },
];

export default routes;
