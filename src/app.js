var React = require('react');

var Hello = React.createClass({
  displayName: 'hello',
  render: function() {
    return <div>hey, {this.props.name}</div>
  }
});

React.render(<Hello name="world" />, document.body);