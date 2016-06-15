'use strict'

const config = require('config');
let router = require('express').Router();

router.use(config.apiContextRoot, require('server/routes/locationAPI'));
router.use(config.contextRoot, require('server/routes/user'));
router.use(config.contextRoot, require('server/routes/main'));

module.exports = router;
