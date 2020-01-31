const db = require("../models/accounts");

const Family = require("../models/accounts")
// Defining methods for the AccountsController
module.exports = {
  create: function(req, res) {
    console.log("create hit")
    console.log(req.body);
    Family
      .create(req.body)
      .then(dbModel => res.json(dbModel)) 
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Accounts
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Accounts
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
