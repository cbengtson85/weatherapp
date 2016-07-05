'use strict'

const controllers = require('server/controllers');
const router = require('express').Router();

router.get('/place-name-search/:q', controllers.placeNameAPI.getPlaceNameData);

module.exports = router;
