'use strict'

const controllers = require('server/controllers');
const router = require('express').Router();

router.get('/weather-data/:q', controllers.weatherAPI.getWeatherData);

module.exports = router;
