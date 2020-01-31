const path = require("path");
const router = require("express").Router();
const accountsController = require("../controller/accountsController");


// API Routes
//WHAT DOES THIS DO?
router.route("/")
  .get(function(req,res){
    res.json({message:"hello"})
  });

  //This pushes accountform data into the database
router.route("/api/account")
.post(accountsController.create);


// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build"));//is this right client/build...
// });

module.exports = router;