var express = require('express');
var router = express.Router();

const data = require('../data')


/* GET home page. */
router.get('/', function (req, res, next) {
  data().then(output => {
    res.send(output)
  })
});

module.exports = router;
