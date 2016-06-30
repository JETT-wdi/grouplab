'use strict';

const api = require('./api');
const ui = require('./ui');

const onGetBooks = function(event) {
   event.preventDefault();
   api.getBooks()
    .done(ui.successGetBook)
    .fail(ui.failure);
};


const addHandlers = () => {
  $('#retrieve-data').on('submit', onGetBooks);
};

module.exports = {
  addHandlers,
};
