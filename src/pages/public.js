import React from 'react'
import NavHelper from '../components/nav-helper'

export default React.createClass({
  displayName: 'PublicPage',
  render() {
    return (
      <div>
        <h5>sup</h5>
        <a href="/login">
          login
        </a>
      </div>
    )
  }
});