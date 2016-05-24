'use strict'

const controllers = require('server/controllers');
let router = require('express').Router();

router.get('/location-search/:q', controllers.locationAPI.sendLocationsList);

module.exports = router;
