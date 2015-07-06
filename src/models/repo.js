import Model from 'ampersand-model'
import githubMixin from '../helpers/github-mixin'

export default Model.extend(githubMixin, {
  url() {
    return 'https://api.github.com/repos/' + this.full_name
  },

  props: {
    id: 'number',
    name: 'string',
    full_name: 'string'
  },

  derived: { //read only props, usually depending on props that can be formatted differently or whatever
    repo_url: {
      deps: ['full_name'],
      fn () {
        return 'repo/' + this.full_name
      }
    }
  }
})