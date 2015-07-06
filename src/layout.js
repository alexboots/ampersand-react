// This fileis in the root of src just because its used everywhere 

import React from 'react'
// anything you set as a property that is a state or collection object it will listen to those and refresh if they change
import ampersandReactMixin from 'ampersand-react-mixin'

import NavHelper from './components/nav-helper'

export default React.createClass({
  mixins: [ampersandReactMixin],
  displayName: 'Layout',
  render () {
    const {me} = this.props // this is es6 feature called destructuring - the equivalent is doing var me = this.props.me
                            // its nice because you can do {me, user, id} and all those vars get set if they exist on the object

    return (
      <NavHelper>        
        <nav>
          <a href='/'>Home</a> | 
          <a href='/repos'> repos</a> | 
          <a href='/logout'> Logout </a>
        </nav>
        <span>{me.login}</span>

        <div className='container'>
          {/* This is a special props thats available if something is 
           getiting a property - in routes.js this is being used like so:
             Layout
              
             Layout */}
          {this.props.children}
        </div>
      </NavHelper>
    )
  }
});
