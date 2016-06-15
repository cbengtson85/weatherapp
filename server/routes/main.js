'use strict'

const controllers = require('server/controllers');
let router = require('express').Router();


router.get('/api-requests-count', controllers.main.renderApiRequestsCount);
router.get('(/|/home|/news|/weather*)', controllers.main.renderHomePage);

module.exports = router;
