var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/movies', function(req, res, next) {
  var obje = req.body;
  console.log(obje.Search[0]);
  res.send("hello express");
});

module.exports = router;
