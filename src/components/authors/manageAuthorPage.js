"use strict";

var React = require('react');
var AuthorForm = require('./authorForm');

var ManageAuthorPage = React.createClass({
    getInitialState: function() {
        return {
            author: {id: '', firstName: '', lastName: ''}
        };
    },

    //Change handler Update state that is getting bubbled up from child component
    //Called on every single key press
    setAuthorState: function(event) {
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({author: this.state.author});
    },

    render: function() {
        return (
            <AuthorForm
                author={this.state.author}
                onChange={this.setAuthorState}/>
        );

    }
});

module.exports = ManageAuthorPage;
