
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
