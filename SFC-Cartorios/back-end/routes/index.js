var express = require('express');
var router = express.Router();

var user = require('./oficiais');
router.use('/oficiais',user);

module.exports = router;