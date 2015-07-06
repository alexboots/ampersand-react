import app from 'ampersand-app' // This is instead of doing window.app
  // ^ this uses a singleton so it always returns the same instance of the same object :ok:

import React from 'react' //es6 imports - same as var React = require('react');
import styles from './styles/main.less'
import Router from './router'
import Me from './models/me'

console.log('ME', Me)

//expose to console for debugging
window.app = app;

app.extend({
  init () {
    this.me = new Me()
    this.router = new Router();
    this.router.history.start();
  }
});

app.on('hello', (data) => {
  console.log('hey trigger test hello hi yeah', data);
});

app.init();

// const Hello = React.createClass({ // Use const to indicate intent - should never be re-asigned 
//   displayName: 'Hello',
//   render () { //If using a function thats part of an object dont need to do function
//     return <div>hey, {this.props.name}</div>
//   }
// });


// var Hello = React.createClass({
//   displayName: 'hello',
//   render: function() {
//     return <div>hey, {this.props.name}</div>
//   }
// });

// React.render(<Hello name="world" />, document.body);
