// Global Object
console.log(__dirname);
console.log(__filename);

//Modules
const path  = require('path');
console.log(`The file name is ${path.basename(__filename)}`);
