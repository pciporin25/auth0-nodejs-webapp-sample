var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/what-if', function (req, res, next) {
  res.render('what-if', { title: 'What If...' });
});

module.exports = router;
