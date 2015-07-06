import app from 'ampersand-app'

export default {
  ajaxConfig () {
    // http://ampersandjs.com/docs#ampersand-model-ajaxconfig
    /* ampersand-sync will call ajaxConfig on your model before it makes the request 
       to the server, and will merge in any options you return to the request. */
    return {
      headers: {
        Authorization: 'token ' + app.me.token  // https://developer.github.com/v3/oauth/#web-application-flow
      }
    }
  }  
}