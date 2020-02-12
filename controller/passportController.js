//NEED TO MATCH UP

const mongoose = require('mongoose');
const db = require('../models');
const passport = require('passport');
require('../passport/passport')(passport);

// function to get JSON web token
const getToken = (headers) => {
	if (headers && headers.authorization) {
		const parted = headers.authorization.split(' ');
		if (parted.length === 2) {
			return parted[1];
		} else {
			return null;
		}
	} else {
		return null;
	}
};

module.exports = {
    //Purpose of this code is to update the family profile record
	familyUpdate: function(req, res) {
		const token = getToken(req.headers);
		if (token) {
			db.family
				.findByIdAndUpdate(
					{ _id: req.body._id },
					{
						$set: {
							email: req.body.email,
							first_name: req.body.first_name,
							last_name: req.body.last_name,
                            child_1_first_name: req.body.child_1_first_name,
                            child_2_first_name: req.body.child_2_first_name,
                            elf_1: req.body.elf_1,
                            elf_2: req.body.elf_2
						}
					}
				)
				.then((data) => res.json(data));
		} else {
			return res.status(403).send({ success: false, msg: 'Unauthorized.' });
		}
	},

	
};




