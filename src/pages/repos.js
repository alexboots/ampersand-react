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
            <div key={repo.id}> {/* Adding this gets rid of this console warning: Warning: Each child in an array or iterator should have a unique "key" prop. Check the render method of ReposPage. See https://fb.me/react-warning-keys for more information. */}
              <a href={repo.repo_url}>{repo.full_name}</a>
            </div>
          )
        })}
      </div>
    )
  }
});