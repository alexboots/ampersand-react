import React from 'react'
import NavHelper from '../components/nav-helper'

export default React.createClass({
  displayName: 'PublicPage',
  render() {
    return (
      <NavHelper className='container'>
        <h5>sup</h5>
        <a href="/vulns">
          go to vulns
        </a>
      </NavHelper>
    )
  }
});