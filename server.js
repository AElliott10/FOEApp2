//FILE ACTS AS THE ROUTER FOR BOTH THE CLIENT SIDE AND THE SERVER/DATABASE
const express = require("express");
const favicon = require('express-favicon');
const mongoose = require('mongoose');
const db = require('./models/accounts');
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
var auth = require('./routes/passportAuth');
const connection = mongoose.connection;
const routes = require("./routes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//connect to mongoose
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/27017/Foe_db';

mongoose.Promise = require('bluebird');
mongoose.connect(MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	promiseLibrary: require('bluebird')
});

connection.once('open', function callback() {
	console.log('Connected to MongoDB!');
});

// Define API routes here
app.use('/',require('./routes'));
app.use('/api/auth', auth);
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});


//Two options for connecting to mongoose
/*mongoose.Promise = require('bluebird');
mongoose.connect(MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	promiseLibrary: require('bluebird')
});

connection.once('open', function callback() {
	console.log('Connected to MongoDB!');
});*/


/*mongoose connection
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost: 27017/Foe_db', {useNewUrlParser: true})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function(){
    console.log('Connected to MongoDB')
})*/
