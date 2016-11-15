var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/p/:tagId', function(req, res, next) {
  res.send("hello " + req.params.tagId);
});

router.post('/fname', function(req, res, next) {
  res.send("Full name is : " + req.query.fn+" "+req.query.ln);
});

module.exports = router;
