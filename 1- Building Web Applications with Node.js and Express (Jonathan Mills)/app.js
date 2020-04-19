// Dependencies
const express = require('express');
const chalk = require('chalk');
const debug = require('debug');
const morgan = require('morgan');
const path = require('path');

// Varaibles
const app = express();
const port = process.env.PORT || 3000;
const debApp = debug('app');
const nav = [{ name: 'books', link: '/books' },
  { name: 'authors', link: '/authors' },
  { name: 'branchs', link: '/branchs' },
  { name: 'contact', link: '/contact' }];
const booksRouter = require('./src/routes/bookRoute')(nav);

// Middlewares
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, 'public')));

// Template engine
app.set('views', './src/views');
app.set('view engine', 'ejs');

// Main Route
app.get('/', (req, res) => {
  res.render('index',
    {
      name: '3aMoOo-oor',
      title: 'Library',
      list: nav
    });
});

// Include Routes
app.use('/books', booksRouter);

// Running app on PORT
app.listen(port, () => {
  debApp(`\nMagic happens on port ${chalk.italic.yellow(port)}`);
});
