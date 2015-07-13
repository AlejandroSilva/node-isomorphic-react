'use strict';

var React = require('react');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            text: 'escribe algo897777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777',
            photoAdded: false
        }
    },

    handleChange: function(event){
        //console.log(event.target.value);
        this.setState({
            text: event.target.value
        });
    },

    handlePhoto: function () {
        this.setState({
            addedPhoto: !this.state.addedPhoto
        })
    },

    remainingCharacters: function () {
        return 140-this.state.text.length-(this.state.addedPhoto? 23: 0);
    },

    overflowAlert : function () {
        if(this.remainingCharacters()<0){
            return (
                <h3>Oops, Too Long... {this.state.text.substring(this.state.addedPhoto?117:140, this.length)}</h3>
            );
        }else{
            return;
        }
    },

    render: function render() {
        return (
            <section className="spa-section">
                <div className="well clearfix">
                    <h1>Section 3</h1>
                    {this.overflowAlert()}
                    <textarea className="form-control" onChange={this.handleChange}>
                        {this.state.text}
                    </textarea>
                    <br/>
                    <button className="btn btn-primary pull-right" disabled={(this.state.text.length===0 && !this.state.addedPhoto) || this.remainingCharacters()<0 }>
                        Tweet
                    </button>
                    <button className="btn btn-default pull-right" onClick={this.handlePhoto}>
                        {this.state.addedPhoto? "Remove photo": "Add phoro"}
                    </button>
                    <span>{ this.remainingCharacters() }</span>
                </div>
            </section>
        );
    }
});
