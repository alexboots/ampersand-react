// user model | state object
// Use 'me' instead of user since 'user' because user is such an overloaded term, can be ambiguous 
// 'me' context is always the user actually sitting at the keyboard, using the app. 
import Model from 'ampersand-model' //extends amperstand-state


export default Model.extend({
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

  initialize () {
    this.token = window.localStorage.token
    this.on('change', this.onChangeToken)
    this.fetchInitialData()
  },

  onChangeToken () {
    window.localStorage.token = this.token
  },

  fetchInitialData () {
    if(this.token){
      this.fetch()
    }
  },

  ajaxConfig () {
    // http://ampersandjs.com/docs#ampersand-model-ajaxconfig
    /* ampersand-sync will call ajaxConfig on your model before it makes the request 
       to the server, and will merge in any options you return to the request. */
    return {
      headers: {
        Authorization: 'token ' + this.token  // https://developer.github.com/v3/oauth/#web-application-flow
      }
    }
  }

})