import app from 'ampersand-app'
import React from 'react'
// This helps us create internal-links for single page app-ness
// vs external links and helps w command click opening in new tab and 
// hovering link and see where its going, deals w different browser implementations of click event and so on
import localLinks from 'local-links' //https://www.npmjs.com/package/local-links

export default React.createClass({
  displayName: 'PublicPage',
  onClick (event) {    
    // event is normalized by react
    // To get raw event: event.rawEvent
    const pathname = localLinks.getLocalPathname(event); //this deals w everything crazy    
    if(pathname) {
      event.preventDefault();
      app.router.history.navigate(pathname);
    }      
  },
  render() {
    return (
      <div onClick={this.onClick}>
        <h5>sup</h5>
        <a href="/vulns">
          go to vulns
        </a>
      </div>
    )
  }
});