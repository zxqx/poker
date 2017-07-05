# poker

A modern web app for playing hold 'em with your friends and enemies.

[![Circle CI](https://circleci.com/gh/zakangelle/poker/tree/master.svg?style=shield)](https://circleci.com/gh/zakangelle/poker/tree/master) [![Coverage Status](https://img.shields.io/coveralls/zakangelle/poker.svg)](https://coveralls.io/github/zakangelle/poker?branch=master)

## Requirements

+ NodeJS

## Tech Stack

* [react (v15)](https://facebook.github.io/react/) - View layer
* [react-router (v4)](https://reacttraining.com/react-router/web/guides/quick-start) - Router
* [redux](https://github.com/reactjs/redux) - State management
* [redux-thunk](https://github.com/gaearon/redux-thunk) - Async actions
* [sass](http://sass-lang.com/) - CSS preprocessor
* [react-css-modules](https://github.com/gajus/react-css-modules) - Scoped CSS modules
* [babel](https://babeljs.io/) - ES6/JSX compiler
* [webpack (v2)](https://webpack.github.io/) - Module bundler
* [jest](https://facebook.github.io/jest/) - Test suite

## Setup

Install dependencies:

```sh
$ npm install
```

Boot up the app:

```sh
$ npm start
```

To run the server in release mode, set the environment variable `NODE_ENV=production`

## Test

Run tests:

```sh
$ npm test
```

## Release

Generate a release build in `dist`:

```sh
$ npm run build
```
