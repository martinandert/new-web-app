import webpack from 'webpack';
import config from '../../webpack.config';

const compiler = webpack(config);

export default function hotify(app) {
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}
