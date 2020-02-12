
const Family = require("../models/accounts")
// Defining methods for the AccountsController
module.exports = {
  create: function(req, res) {
    console.log("create hit")
    console.log(req.body);
    //req.body. = new Date("12/25/2020"); 
    Family
      .create(req.body)
      .then(dbModel => res.json(dbModel)) 
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    Family
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    Family
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};


//This post is to give messages with the form and save the account to the database -- NEED TO SEE IF YOU CAN USE

/*router.post('/register', function(req, res, err) {
	if (
		// added .values so data can be parsed
		!req.body.values.email ||
		!req.body.values.password ||
		!req.body.values.firstName ||
		!req.body.values.lastName ||
		!req.body.values.zipCode
	) {
		res.status(500).send({ success: false, msg: 'Authentication failed. You must fill in all fields' });
		res.msg = 'You must fill in all fields';
		console.log(res.msg);
	} else {
		// create new user variable
		const newUser = new User({
			// this contains new parsing params
			userName: req.body.values.userName,
			password: req.body.values.password,
			firstName: req.body.values.firstName,
			lastName: req.body.values.lastName,
			zipCode: req.body.values.zipCode
		});
		// save the user
		newUser
			.save()
			.then((user) => {
				// if success send message
				res.json({ success: true, msg: 'You are now registered' });
			})
			// if err catch err
			.catch((err) => console.log(err));
		// you can tack a db request here with a then statement
	}
});
*/
