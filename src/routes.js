import { Route, IndexRoute, Redirect } from 'react-router';

import App from './components/App';
import Home from './components/pages/Home'
import About from './components/pages/About';
import Users from './components/pages/Users';
import User from './components/pages/User';
import NotFound from './components/pages/NotFound';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />

    <Route path="about" component={About} />
    <Route path="users" component={Users} />
    <Route path="user/:id" component={User} />

    <Redirect from="users/:id" to="user/:id" />

    <Route path="*" component={NotFound} />
  </Route>
);
