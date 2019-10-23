const movies = require('./movies');

// ---------------------- Shared state example -----------------------
// movies.favmMovie = "Matrix";
// console.log('Saly favourite movie is ' + movies.favmMovie);

// ------------- Factory Method -------------------
var salyMovie = movies();
salyMovie.favmMovie = "Matrix";
console.log('Sally favourite movie is ' + salyMovie.favmMovie);
