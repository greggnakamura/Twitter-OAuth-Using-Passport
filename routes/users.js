var express = require('express');
var router = express.Router();
var twitter = require('../services/twitter')
('<KEY>','<SECRET>');

// middleware: if no user
router.use('/', function(req, res, next){

    if(!req.user){
        res.redirect('/');
    }
    next();
});

// middleware: twitter
router.use('/', function (req, res, next) {
    if (req.user.twitter) {
        twitter.getUserTimeline(
            req.user.twitter.token,
            req.user.twitter.tokenSecret,
            req.user.twitter.id,
            function (results) {
                req.user.twitter.lastPost = results[0].text;
                next();
            });
    }
});

module.exports = router;
