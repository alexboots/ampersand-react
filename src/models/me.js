// user model | state object
// Use 'me' instead of user since 'user' because user is such an overloaded term, can be ambiguous 
// 'me' context is always the user actually sitting at the keyboard, using the app. 
import Model from 'ampersand-model' //extends amperstand-state
import RepoCollection from './repo-collection'
import githubMixin from '../helpers/github-mixin'

export default Model.extend(githubMixin, {
  url: 'https://api.github.com/user',

  // Note: the stuff we don't explicity define here will not get saved, even if the model contains it when .save() ing
  props: { // githubs gonna give us https://developer.github.com/v3/users/#get-the-authenticated-user
    id: 'number',
    login: 'string',
    avatar_url: 'string'
  },

  session: { // any session properties - wont get includes in save calls, just for local session info
    token: 'string' // need to persist this 
  },

  collections: { // define child collections
    repos: RepoCollection // app.me.repos = repo collection | dont have to call new on it because it does that when a new model is created
  },

  initialize () {
    this.token = window.localStorage.token
    this.on('change', this.onChangeToken)
  },

  onChangeToken () {
    window.localStorage.token = this.token
  },

  fetchInitialData () {
    if(this.token){
      this.fetch()
    }
  }

})