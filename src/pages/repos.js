import React from 'react'
import ampersandReactMixin from 'ampersand-react-mixin'

export default React.createClass({
  mixins: [ampersandReactMixin],
  displayName: 'ReposPage',
  render() {
    const {repos} = this.props

    return (
      <div>
        asdf
        {repos.map((repo) => {
          return (
            <div>
            hi
              {repo.id}
              {repo.full_name}
            </div>
          )
        })}
      </div>
    )
  }
});