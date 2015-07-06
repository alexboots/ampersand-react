import React from 'react'

export default React.createClass({
  displayName: 'RepoDetailPage',

  render () {
    const {repo} = this.props
    return (
      <div class='container'>
        {repo.full_name}
      </div>
    )
  }
})