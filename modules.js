const movies = require('./modules/movies');

// movies.printAvatar();
// movies.printChappie();

// ----------------- Module shared state and Factory Method --------------------
// Also modules is using reference by default which mean that saly and sam shares the same copy
// Factory method is a method to give saly and sam different copies
const saly = require('./modules/saly');
const sam = require('./modules/sam');

// ------------------------- Core Modules -------------------------------
// Path is great modul to handle your pathes operations
const path = require('path');
var webPathBroken = "home/amr/public/fic//gp/index.html";
var webPath = "home/amr/public/fic/gp/index.html";
console.log(path.normalize(webPathBroken)); // normalize it based on your OS
console.log(path.dirname(webPath));
console.log(path.basename(webPath));
console.log(path.extname(webPath));
