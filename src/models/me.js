// user model | state object
// Use 'me' instead of user since 'user' because user is such an overloaded term, can be ambiguous 
// 'me' context is always the user actually sitting at the keyboard, using the app. 
import Model from 'ampersand-model' //extends amperstand-state


export default Model.extend({
  props: { // githubs gonna give us https://developer.github.com/v3/users/#get-the-authenticated-user
    id: 'number',
    login: 'string',
    avatar_url: 'string',
    url: 'string'
  },
  session: { // any session properties - wont get includes in save calls, just for local session info
    token: 'string' // need to persist this 
  },
  initialize () {
    this.token = window.localStorage.token
    this.on('change', this.onChangeToken)
  },
  onChangeToken () {
    window.localStorage.token = this.token
  }

})