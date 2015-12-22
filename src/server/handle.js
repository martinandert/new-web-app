import { renderToString as render } from 'react-dom/server';
import { RoutingContext, match } from 'react-router';

import routes from '../routes';

export default function handle(req, res, next) {
  function handler(error, redirect, renderProps) {
    if (error) {
      next(error);
    } else if (redirect) {
      res.redirect(301, redirect.pathname + redirect.search);
    } else if (renderProps) {
      const status = renderProps.params.splat ? 404 : 200;
      const markup = render(<RoutingContext {...renderProps} />);

      res.status(status).render('layout', { markup });
    } else {
      // should never be reached since we have a catch-all route
      res.status(404).send('404 - Not Found');
    }
  }

  match({ routes, location: req.originalUrl }, handler);
}
