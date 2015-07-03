import React from 'react' //es6 imports - same as var React = require('react');
import styles from './styles/main.less'
import Router from './router'

window.app = {
  init () {
    this.router = new Router();
    this.router.history.start();
  }
}
window.app.init();

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
