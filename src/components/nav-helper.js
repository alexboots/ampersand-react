import app from 'ampersand-app'
import React from 'react'
// This helps us create internal-links for single page app-ness
// vs external links and helps w command click opening in new tab and 
// hovering link and see where its going, deals w different browser implementations of click event and so on
import localLinks from 'local-links' //https://www.npmjs.com/package/local-links

export default React.createClass({
  displayName: 'NavHelper',
  onClick (event) {    
    // event is normalized by react
    // To get raw event: event.rawEvent
    const pathname = localLinks.getLocalPathname(event); //this deals w everything crazy    
    if(pathname) {
      event.preventDefault();
      app.router.history.navigate(pathname);
    }      
  },
  render () {
    // ...this.props = anything that gets passes as a property, 
    // apply it to this tag here. Will apply any class
    // places on NavHelper to this div.
    return (
      <div {...this.props} onClick={this.onClick}>
        {this.props.children}
      </div>
    )
  }
});