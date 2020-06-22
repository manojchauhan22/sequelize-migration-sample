const db = require('../models');

const signUp = async (req, res, next) => {
	try {
		const user = await db.Profile.create(req.body);
		return res.status(200).json({user});
	} catch (error) {
		next(error);
	}
};

const login = async (req, res, next) => {
	try {
		return res.status(200).json({});
	} catch (error) {
		next(error);
	}
};


module.exports = {
	signUp,
	login
};
