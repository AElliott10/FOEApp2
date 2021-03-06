//SECTION 1: Needed to create a Schema
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const accountsSchema = new mongoose.Schema({
// `date` must be of type Date. The default value is the current date
  accountCreated: {
    type: Date,
    default: Date.now
  },
    // `email` is of type String
    // `email` must match the regex pattern below and throws a custom error message if it does not
    // You can read more about RegEx Patterns here https://www.regexbuddy.com/regex.html
    email: {
        type: String,
        unique: true,
        required: "Email is Required",
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    // `password` must be of type String
    // `password` will trim leading and trailing whitespace before it's saved
    // `password` is a required field and throws a custom error message if not supplied
    // `password` uses a custom validation function to only accept values 6 characters or more
    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [
            function (input) {
                return input.length >= 6;
            },
            "Password should be longer."
        ]
    },
    // `username` must be of type String
    // `username` will trim leading and trailing whitespace before it's saved
    // `username` is a required field and throws a custom error message if not supplied
    
    first_name: {
        type: String,
        trim: true,
        required: "First name is Required"
    },
  
     last_name: {
        type: String,
        trim: true,
        required: "Last name is Required"
    },

    //add_parent_first_name: { type: String },
   // add_parent_last_name: { type: String },
    // how do I account for + Add Children First Name and can I have the database assign them an id?
    child_1_first_name: { 
        type: String,
        trim: true,
        required: "Child's name is Required" 
    }, 
    child_2_first_name: { 
        type: String,
        trim: true 
    }, 
    child_3_first_name: { 
        type: String,
        trim: true 
    }, 

    // `elf_name` must be of type String
    // `elf_name` will trim leading and trailing whitespace before it's saved
    // `username` is a required field and throws a custom error message if not supplied
    
    elf_1: {
        type: String,//still need if from a drop down?
        trim: true,//need?
        required: "Elf is Required"
    },
    elf_2: {
        type: String,//still need if from a drop down?
        trim: true,//need?
        required: "Elf is Required"
    },
    start_festival: { 
        type: Date, 
        required: "Please select a start date"
        /*validate: [
            function (input) {
                return input.dateFormat >= mm/dd/yyy;
            },
            "Please use MM/DD/YYYY format."
        ]*/
    }, //defaults to December 1 or if after account is create user has to select a start date.

    learn_about: { type: String }, //assuming which checkbox they select will input into database
    account_active: {type: Boolean, default: true}

});


accountsSchema.methods.comparePassword = function(password, cb) {
    console.log('password', password);
    console.log('this.password', this.password);

    if (password === this.password) {
        return cb(null, true);
    } else {
        return cb(new Error('Wrong Password'))
    }
	// bcrypt.compare(password, this.password, function(err, isMatch) {
	// 	if (err) {
	// 		return cb(err);
	// 	}
	// 	cb(null, isMatch);
	// });
};


module.exports = mongoose.model('family', accountsSchema);


//SECTION 2: Needed to create the model & allow it to be exported
//Need to point it to a collection
