// ---------------------------- Start Using Express ---------------------------
const express = require('express');
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var app = express();
app.listen(3000);

app.set('view engine', 'ejs');
app.use('/assets',express.static('assets')); // to handle static files
app.get('/',function(req, res) {
  // res.sendFile(__dirname + '/index.html');
  res.render('index');
});
app.get('/contact',function(req, res) {
  // res.sendFile(__dirname + '/contact.html');
  res.render('contact',{qs: req.query});
});
app.post('/contact', urlencodedParser, function (req, res) {
  res.render('contact-success',{data: req.body});
})
app.get('/profile/:name',function(req, res) {
  var data = {
    id: 20160313,
    job: 'Software Engineer',
    age: 21,
    hoppies: [
      'eating',
      'fishing',
      'fighting'
    ]
  }
  res.render('profile', {person:req.params.name, data:data});
});
