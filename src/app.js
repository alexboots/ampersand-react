import app from 'ampersand-app' // This is instead of doing window.app
  // ^ this uses a singleton so it always returns the same instance of the same object :ok:

import React from 'react' //es6 imports - same as var React = require('react');
import styles from './styles/main.less'
import Router from './router'
import Me from './models/me'

//expose to console for debugging ONLY
window.app = app;

app.extend({
  init () {
    this.me = new Me()
    this.me.fetchInitialData()
    this.router = new Router();
    this.router.history.start();
  }
});

app.on('hello', (data) => {
  console.log('hey trigger test hello hi yeah', data);
});

app.init();