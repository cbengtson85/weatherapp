'use strict'

const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({extended: true});
const controllers = require('app/controllers');
let router = require('express').Router();

router.post('/submit-user-data', urlEncodedParser, controllers.user.saveUserInfo);

module.exports = router;
