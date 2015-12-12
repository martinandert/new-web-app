# new-web-app

An opinionated Node.js web application template using Express, React, Babel, Sass, and Webpack.

This is WIP. Move along.

## Installation

```sh
$ git clone --depth=1 https://github.com/martinandert/new-web-app.git MY-APP-NAME
$ cd MY-APP-NAME && rm -rf .git/ && npm install
```

Replace `MY-APP-NAME` with the name you'd like to give your app.

## Running the app

**To run it in production:**

```sh
$ npm run production:build
$ NODE_ENV=production npm start
```

The `npm run production:build` command is only necessary if you've changed something.

**To run it in development, watching files for changes:**

```sh
$ npm start
```

This assumes that `NODE_ENV` is either unset or set to "development".

Execute `npm run` to get a list of all commands defined in the "scripts" section of package.json.

## License

Licensed under The MIT License.
