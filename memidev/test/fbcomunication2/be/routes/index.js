var express = require('express');
var router = express.Router();
/* GET home page. */
router.use('/api', require('./api'))
router.all('*', function (req, res, next) {
    next(createError(404));
})

module.exports = router;
