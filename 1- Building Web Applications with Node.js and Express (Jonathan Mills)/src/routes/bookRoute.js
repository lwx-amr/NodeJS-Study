const express = require('express');

function bookRoute(nav) {
  // Variables
  const bookRouter = express.Router();
  const books = [{
    title: 'Legal Assistant', author: 'Reinaldos', genre: 'g.co', read: true
  },
  {
    title: 'Sales Associate', author: 'Belita', genre: 'deviantart.com', read: false
  },
  {
    title: 'Director of Sales', author: 'Clotilda', genre: 'a8.net', read: false
  },
  {
    title: 'Research Associate', author: 'Kevon', genre: 'elpais.com', read: true
  },
  {
    title: 'Senior Quality Engineer', author: 'Trudie', genre: 'microsoft.com', read: true
  },
  {
    title: 'Geological Engineer', author: 'Cece', genre: 'wufoo.com', read: false
  },
  {
    title: 'Graphic Designer', author: 'Ruggiero', genre: 'diigo.com', read: false
  },
  {
    title: 'Analog Circuit Design manager', author: 'Meris', genre: 'guardian.co.uk', read: false
  },
  {
    title: 'Recruiting Manager', author: 'Binny', genre: 'google.ca', read: false
  },
  {
    title: 'Web Developer III', author: 'Beatrice', genre: 'hatena.ne.jp', read: true
  }];

  // Book Routes
  bookRouter.route('/')
    .get((req, res) => { // All Books
      res.render('books',
        {
          name: '3aMoOo-oor',
          title: 'Library',
          list: nav,
          books
        });
    });

  bookRouter.route('/single/:id')
    .get((req, res) => { // Single Book
      const { id } = req.params;
      res.render('book', {
        name: '3aMoOo-oor',
        title: 'Library',
        list: nav,
        book: books[id]
      });
    });
  return bookRouter;
}

module.exports = bookRoute;
