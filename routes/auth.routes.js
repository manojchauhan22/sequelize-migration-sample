const express = require('express');
const authCtrl = require('../controllers/auth.controller');

const router = express.Router();
module.exports = (app) => {
	router.route('/login')
		.post(authCtrl.login);
	router.route('/sign-up')
		.post(authCtrl.signUp);

	app.use('/', router);
};