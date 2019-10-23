const movies = require('./movies');

// ---------------------- Shared state example -----------------------
// movies.favmMovie = "Dark";
// console.log('Sam favourite movie is ' + movies.favmMovie);

// ------------- Factory Method -------------------
var samMovie = movies();
// samMovie.favmMovie = "Dark";
console.log('Sam favourite movie is ' + samMovie.favmMovie);
