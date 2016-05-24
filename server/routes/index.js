'use strict'

const config = require('config');
let router = require('express').Router();

router.use(config.contextRoot, require('server/routes/main'));
router.use(config.contextRoot, require('server/routes/user'));
router.use(config.apiContextRoot, require('server/routes/locationAPI'));

module.exports = router;
