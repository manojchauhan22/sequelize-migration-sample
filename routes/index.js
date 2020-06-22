const router = require("express").Router();
const walkSync = require('walk-sync');
const path = require('path');

// test route
router.get('/test', (req, res) => {
	res.status(200).json('Ok');
});

walkSync(`./routes`, {
  globs: ['*.routes.js'],
  ignore: ['index.js'],
}).forEach((route) => {
  require(path.resolve(path.join(__dirname, route)))(router);
});

module.exports = router;
