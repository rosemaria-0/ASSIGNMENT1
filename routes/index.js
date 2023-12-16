var express = require('express');
var router = express.Router();

/* GET home page. */
//path here is relative to the path associated with to the object in app.js
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Portfolio' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'My Projects' });
});



module.exports = router;
