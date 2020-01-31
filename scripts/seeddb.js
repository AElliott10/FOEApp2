// This file empties the Accounts collection and inserts the accounts below
//To use the script type into the terminal node seeddb.js

const mongoose = require("mongoose");
const db = require("../models/accounts");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/Foe_db"
);

const accountsSeed = [
  {
    accountCreated: new Date(Date.now()),
    email: "ann@crazy.com",
    password: "12345",
    first_name: "Ann",
    last_name: "Arbor",
    child_1_first_name: "Annabell",
    child_2_first_name: "Aaron",
    child_3_first_name: "Angelo",
    elf_1: "Joy",
    elf_2: "Noel",
    start_festival: "12/01/2020",
    end_festival: "12/25/2020",
    learn_about: "Facebook",
    account_active: true
  },
  {
    accountCreated: new Date(Date.now()),
    email: "bob@crazy.com",
    password: "12345",
    first_name: "Bob",
    last_name: "Barker",
    child_1_first_name: "Bobby",
    child_2_first_name: "Baron",
    child_3_first_name: "Buckwheat",
    elf_1: "Sprinkles",
    elf_2: "Winkles",
    start_festival: "12/15/2020",
    end_festival: "12/25/2020",
    learn_about: "Blog",
    account_active: true
  }
];

db.family
  // .remove({})
  .then(() => db.family.collection.insertMany(accountsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  })


  