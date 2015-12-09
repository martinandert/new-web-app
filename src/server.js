import 'source-map-support/register';

import express from 'express';
import compression from 'compression';
import serveFavicon from 'serve-favicon';
import expiry from 'static-expiry';
import logger from 'morgan';
import errorHandler from 'errorhandler';
import { normalize } from 'path';
import { renderToString as render } from 'react-dom/server';
import { RoutingContext, match } from 'react-router';

import routes from './routes';

const app = express();
const port = process.env.PORT || 3000;
const publicPath = normalize(__dirname + '/../static');

app.set('view engine', 'ejs');

app.use(compression());
app.use(serveFavicon(publicPath + '/favicon.ico'));
app.use(expiry(app, { dir: publicPath, location: 'postfile' }));
app.use(express.static(publicPath, { index: false }));
app.use(logger(__DEV__ ? 'dev' : 'combined'));

app.get('*', (req, res, next) => {
  match({ routes, location: req.originalUrl }, (error, redirect, renderProps) => {
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
  });
});

if (__DEV__) {
  app.use(errorHandler());
}

app.listen(port, () => {
  console.info(`Running in ${process.env.NODE_ENV} environment`);
  console.info(`Listening at http://localhost:${port}`);
});
