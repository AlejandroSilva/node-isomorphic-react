'use strict';
var React = require('react');
var Header = require('./header.jsx');

module.exports = React.createClass({
  render: function render() {
    var bundle;

    if (this.props.addBundle)
      bundle = <script src='/bundle.js'/>;

    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <title>
            {this.props.title}
          </title>
          <link rel="stylesheet" href="/css/styles.css"/>
          <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
          <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
        </head>
        <body>
          <Header {...this.props}></Header>
          <div className="main-content">
             {this.props.children}
          </div>
        </body>
        {bundle}
      </html>
    );
  }
});

// Example code from:
//http://reactfordesigners.com/labs/reactjs-introduction-for-people-who-know-just-enough-jquery-to-get-by/?utm_content=buffer83a12&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer