var express = require('express');
var passport = require('passport');
var router = express.Router();

router.route('/twitter/callback')
    .get(passport.authenticate('twitter', {
        successRedirect: '/users/',
        failure: '/error/'
    }));

router.route('/twitter')
    .get(passport.authenticate('twitter'));

module.exports = router;
