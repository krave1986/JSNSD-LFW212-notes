var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  var greeting = req.query.greeting || 'Hello'
  res.render('hello', { greeting });
});

module.exports = router;
