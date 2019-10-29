// ------------------------------- Connect -------------------------------
const connect = require('connect');
const http = require('http');

var app = connect();


function doFirst(req, res, next) {
  console.log('Becon');
  next();
}
function doSecond(req, res, next) {
  console.log('Tuna');
  next();
}
function profile(req, res, next) {
  console.log('This is profile page');
  next();
}

app.use(doFirst);
app.use(doSecond);
app.use('/profile',profile);

http.createServer(app).listen(3000);
console.log('Server is Running');
