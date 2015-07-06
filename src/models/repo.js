import Model from 'ampersand-model'

export default Model.extend({
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