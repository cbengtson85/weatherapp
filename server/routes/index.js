'use strict'

const config = require('config').config();
let router = require('express').Router();

router.use(config.contextRoot, require('server/routes/main'));
router.use(config.contextRoot, require('server/routes/user'));

module.exports = router;
