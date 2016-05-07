'use strict'

const config = require('config').config();
let router = require('express').Router();

router.use(config.contextRoot, require('app/routes/main'));
router.use(config.contextRoot, require('app/routes/user'));

module.exports = router;
