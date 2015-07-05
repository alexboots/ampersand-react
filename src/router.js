import app from 'ampersand-app'
import React from 'react'
import Router from 'ampersand-router'
import PublicPage from './pages/public'
import VulnsPage  from './pages/vulns'

export default Router.extend({
  routes: {
    '': 'public',
    'vulns': 'vulns'
  },

  public () {    
    console.log('on public page');
    //Since we're using app.extend you can trigger events / send data around your app 
    app.trigger('hello', {'some': 'data'});
    React.render(<PublicPage />, document.body);
  },

  vulns () {
    console.log('on vulns page');
    React.render(<VulnsPage />, document.body);
  }
});
// this is if we're exporting a single thing