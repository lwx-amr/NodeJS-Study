var express = require('express');
var router = express.Router();

// About Page
router.get('/',function(req, res, next){
  res.render('about',{title:'About', name:'Amr'});
});
module.exports = router;
