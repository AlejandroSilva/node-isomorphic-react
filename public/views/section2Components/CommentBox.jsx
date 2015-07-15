'use strict';

var React = require('react');
var CommentForm = require('./CommentForm.jsx');
var CommentList = require('./CommentList.jsx');

var CommentBox = module.exports = React.createClass({
    getInitialState: function () {
        return {
            data: []
        }
    },

    //componentDidMount is a method called automatically by React when a component is rendered.
    componentDidMount: function () {
      $.ajax({
          url: '/api/users',
          dataType: 'json',
          cache: false,
          success: function(data){
              this.setState({
                  data: data
              })
          }.bind(this),
          error: function(xhr, status, err){
              console.error(this.props.url, status, err.toString());
          }.bind(this)
      });
    },

    // called from the CommentForm
    handleCommentSubmit: function (comment) {
        // ToDo: Submit to the server
        this.state.data.push(comment);
        console.log('nuevo: ', comment);
        this.setState({
            data: this.state.data
        })
    },

    render: function () {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
            </div>
        )
    }
});
