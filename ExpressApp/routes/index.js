var express = require('express');
var router = express.Router();
var videoData = require('../videodata.json');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title:'Home',
      name:'Amr',
      videodata : videoData
    });
});

module.exports = router;
