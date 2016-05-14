'use strict'

const controllers = require('server/controllers');
let router = require('express').Router();

router.get('/', controllers.main.renderHomePage);
router.get('/home', controllers.main.renderHomePage);

module.exports = router;

/*app.get('/article/:id', function(req, res) {
	console.log(req.params.id);
	req.query //query param
});*/
