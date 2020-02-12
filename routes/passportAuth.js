//
const mongoose = require('mongoose');
const passport = require('passport');
const settings = require('../passport/setting');
require('../passport/passport')(passport);
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const family = require('../models/accounts');
const passController = require('../controller/passportController');

//use email or user for controller.xxxUpdate???
router.post('/update', passport.authenticate('jwt', { session: false }), controller.emailUpdate);
// changed the way req.body is being parsed to data from post request can be accessed

//Routing the LogIn on click
router.post('/LogIn', function(req, res) {
	family.findOne(
		{
			// updated username to userName to match model
			email: req.body.email
		},
		function(err, user) {
			if (err) throw err;
			// if not a registered user...
			if (!user) {
				// user not found
				res.status(401).send({ success: false, msg: 'Authentication failed. User not found.' });
			} else {
				// check if password matches
				// comparePassword method can be found in User model
				user.comparePassword(req.body.password, function(err, isMatch) {
					if (isMatch && !err) {
						// if user is found and password is right create a token
						const token = jwt.sign(user.toJSON(), settings.secret);
						// return the information including token as JSON
						user.password = undefined;
						res.json({ success: true, token: 'JWT ' + token, user: user });
					} else {
						// auth failed wrong password
						res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
					}
				});
			}
		}
	);
});

module.exports = router;
