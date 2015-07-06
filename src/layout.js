//this is in the root of src just because its used everywhere 
import React from 'react'
import NavHelper from './components/nav-helper'

export default React.createClass({
  displayName: 'Layout',
  render () {
    return (
      <NavHelper>
        <nav>
          <a href='/'>Home</a> | 
          <a href='/vulns'> Vulns</a>
        </nav>

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
