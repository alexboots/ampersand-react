import app from 'ampersand-app'
import Router from 'ampersand-router'
import React from 'react'
import qs from 'qs'
import uuid from 'node-uuid'
import xhr from 'xhr'

import PublicPage from './pages/public'
import ReposPage  from './pages/repos'
import Layout from './layout'

export default Router.extend({
  
  renderPage(page, opts = {layout: true}) { //set default options - this is an es6 thing - if no options are passed, layout true default happens    
    if(opts.layout){
      page = (
        <Layout>
          {page}
        </Layout>
      )
    }
    React.render(page, document.body);
  },

  routes: {
    '': 'public',
    'repos': 'repos',
    'login': 'login',
    'logout': 'logout',
    'auth/callback?:query': 'authCallback' // :query syntax passes whatever str is passed back to authCallback
  },

  public () {    
    console.log('on public page');
    //Since we're using app.extend you can trigger events / send data around your app 
    app.trigger('hello', {'some': 'data'});
    this.renderPage(<PublicPage/>, {layout: true});
  },

  repos () {
    console.log('on repos page');
    this.renderPage(<ReposPage/>);
  },

  login () {
    const state = uuid() // lib that uses browsers cripto object to generate a unique identifier
    window.localStorage.state = state
    // Lets use qs module to build query strings instead of doing '?client_id=' + someID + '&moreStuff' +  ::and so on
    // has stringify and parse method just like json
    window.location = 'https://github.com/login/oauth/authorize?' + qs.stringify({
      client_id: '6cc6877e2fb34e439f4d', // From github app
      redirect_uri: window.location.origin + '/auth/callback',
      scope: 'user, repo', // this is defining whats accessible (like in facbeook where its all 'this app has access to email, wall posts' etc)
      state: state
      // Generate random string to pass to api - api then sends string back w the same string. 
      // This is a way to nobody messed with your request 
    })

  },

  authCallback (query) {
    query = qs.parse(query)
    if(query.state === window.localStorage.state) {
      console.log('authed', query.code)
      delete window.localStorage.state
      xhr({ //just a ajax api, could use jquery, idk
        url: 'https://alexboots-ampersand-react-base.herokuapp.com/authenticate/' + query.code,
        json: true, //will parse response
      }, 
        (error, resp, body) => {
          if(error){
            console.error('An error has occured')
          } else {
            this.redirectTo('/repos')
            app.me.token = body.token // session var for me model
          }
          console.log('error', error)
          console.log('resp', resp)
          console.log('body', body.token)
          console.log('token', body.token)
      }); 
    }    
  },
 
  logout () {
    window.localStorage.clear() // could also inform user they're logging out of this app, not github as a whole. idk
    window.location = '/' // force full page refresh to clear anything in memory 
  }
});