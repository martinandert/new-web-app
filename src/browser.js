import { render } from 'react-dom';
import { Router } from 'react-router';
import { createHistory } from 'history';

import routes from './routes';

render(
  <Router routes={routes} history={createHistory()} />,
  document.getElementById('mount')
);
