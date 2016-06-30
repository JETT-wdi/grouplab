'use strict';

const app = require('../app.js');
const ui = require('./ui.js');

const getBooks = function() {
  return $.ajax({
      url: app.host,
      method: 'GET',
    });
};

module.exports = {
  getBooks,
};
