var express = require('express');
var router = express.Router();

const createError = require("http-errors")

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function (req, res, next) {
  next(createError(405))
})

module.exports = router;
