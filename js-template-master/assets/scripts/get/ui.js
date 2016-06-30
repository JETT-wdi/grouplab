'use strict';

const app = require('../app.js');

const successGetBook = (data) => {
  let bookListing = require('../templates/all-books.handlebars');
  return booklisting
  $('#content').append(bookListing(data));
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  successGetBook,
};
