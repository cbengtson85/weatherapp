'use strict'

const controllers = require('server/controllers');
const router = require('express').Router();

router.get('/location-search/:q', controllers.locationAPI.getLocationsList);

module.exports = router;
