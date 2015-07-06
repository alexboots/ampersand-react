import app from 'ampersand-app'
import React from 'react'
import qs from 'qs'
import Router from 'ampersand-router'
import PublicPage from './pages/public'
import VulnsPage  from './pages/vulns'
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
    'vulns': 'vulns',
    'login': 'login',
    'logout': 'logout',
    'auth/callback?code=:code': 'authCallback' //this ?code:code syntax passes whatever :code is passed back to authCallback
  },

  public () {    
    console.log('on public page');
    //Since we're using app.extend you can trigger events / send data around your app 
    app.trigger('hello', {'some': 'data'});
    this.renderPage(<PublicPage/>, {layout: true});
  },

  vulns () {
    console.log('on vulns page');
    this.renderPage(<PublicPage/>);
  },

  login () {
    // Lets use qs module to build query strings instead of doing '?client_id=' + someID + '&moreStuff' +  ::and so on
    window.location = 'https://github.com/login/oauth/authorize?' + qs.stringify({
      client_id: '6cc6877e2fb34e439f4d', // From github app
      redirect_uri: window.location.origin + '/auth/callback',
      scope: 'user, repo' // this is defining whats accessible (like in facbeook where its all 'this app has access to email, wall posts' etc)
    })

  },

  authCallback (code) {
    console.log(code)
  },
 
  logout () {
    
  }
});
// this is if we're exporting a single thing