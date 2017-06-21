"use strict";

var authors = require('./authorData');
var _ = require('lodash');

var _generateId = function(author) {
    return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
};

var _clone = function(item) {
    return JSON.parse(JSON.stringify(item));
};

var AuthorApi = {
    getAllAuthors: function() {
        return _clone(authors.authors);
    },

    getAuthorById: function(id) {
        var author = _.find(authors, {id: id});
        return _clone(author);
    },

    saveAuthor: function(author) {
        //pretend a ajax call to web api is made here
        console.log('Pretend this just saved the author to DB via AJAX call...');

        if (author.id) {
            var existingAuthorIndex = _.indexOf(authors, _.find(authors, {id: author.id}));
            authors.splice(existingAuthorIndex, 1, author);
        } else {
            // Just simulate creation here
            author.id = _generateId(author);
            authors.authors.push(author);
        }
        return _clone(author);
    },

    deleteAuthor: function(id) {
        console.log('Pretend this just deletes the author to DB via AJAX call...');
        _.remove(authors, {id: id});
    }
};

module.exports = AuthorApi;
