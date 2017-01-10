'use strict'

const config = require('config');
const router = require('express').Router();

router.use(config.apiContextRoot, require('server/routes/locationAPI'));
router.use(config.apiContextRoot, require('server/routes/placeNameAPI'));
router.use(config.apiContextRoot, require('server/routes/weatherAPI'));
router.use(config.contextRoot, require('server/routes/main'));

module.exports = router;
