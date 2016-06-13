'use strict'

const controllers = require('server/controllers');
let router = require('express').Router();

router.get('/', controllers.main.renderHomePage);
router.get('/home', controllers.main.renderHomePage);
router.get('/api-requests-count', controllers.main.renderApiRequestsCount);
/*router.get('/test', function(req, res) {
  res.sendFile(rootPath + '/app/views/home.html');
});*/

module.exports = router;

/*app.get('/article/:id', function(req, res) {
	console.log(req.params.id);
	req.query //query param
});*/
