import app from 'ampersand-app'
import React from 'react'
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
    'vulns': 'vulns'
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
  }
});
// this is if we're exporting a single thing