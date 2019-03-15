var express = require('express');
var createError = require('http-errors');
var router = express.Router();

router.all('*', function (req, res, next) {
    console.log(req.headers)
    if (req.path === "/xxx") {
        return res.send({ status: 'OK' })
    }
    next()
});

router.use('/test', require('./test'));
router.use('/user', require('./user'));

router.all('*', function (req, res, next) {
    next(createError(404, '그런 api 없어요'));
});

module.exports = router;
