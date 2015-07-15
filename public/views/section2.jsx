'use strict';

var React = require('react');
var CommentBox = require('./section2Components/CommentBox.jsx');

module.exports = React.createClass({
  render: function render() {
      var data = [
          {author: "Pete Hunt", text: "This is one comment"},
          {author: "Jordan Walke", text: "This is *another one* comment"}
      ];
      return (
          <section className="spa-section">
              <h2>Section 2</h2>
              <p>This is the second section loaded using react router on the client. It is implemented as a ReactJS component.</p>
              <CommentBox data={data}></CommentBox>
          </section>
      );
  }
});

// Tutorial from:
// http://facebook.github.io/react/docs/tutorial.html

//