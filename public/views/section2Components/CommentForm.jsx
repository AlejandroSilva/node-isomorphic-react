'use strict';

var React = require('react');

var CommentForm = module.exports = React.createClass({
    handleSubmit: function (evt) {
        evt.preventDefault();

        var author = React.findDOMNode(this.refs.author).value.trim();
        var text   = React.findDOMNode(this.refs.text).value.trim();

        if(!text || !author){
            return;
        };

        // call the parent
        this.props.onCommentSubmit({
            author: author,
            text: text
        });

        React.findDOMNode(this.refs.author).value = '';
        React.findDOMNode(this.refs.text).value = '';
        return;
    },

    render: function () {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="your name" ref="author"/>
                <input type="text" placeholder="Say something..." ref="text"/>
                <input type="submit" value="Post"/>
            </form>
        )
    }
});
