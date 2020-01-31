//FILE ACTS AS THE ROUTER FOR BOTH THE CLIENT SIDE AND THE SERVER/DATABASE
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
// const routes = require("./routes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//mongoose connection
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost: 27017/Foe_db', {useNewUrlParser: true})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function(){
    console.log('Connected to MongoDB')
})

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.use('/',require('./routes'));

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
