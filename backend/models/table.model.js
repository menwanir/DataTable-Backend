const mongoose = require("mongoose");
// const validator = require("validator");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "A user must have a name"],
    trim: true,
    
  },
  lastName: {
    type: String,
    required: [true, "A user must have a lastName"],
    trim: true,
  
  },
  
  email: {
    type: String,
    required: [true, "Please provide your email"],
  },
  age: {
    type: Number,
    required: [true, "User must have an age"],
  },
  number: {
    type: Number,
    required: [true, "User must have an number"],
    
  },
});


const User = mongoose.model("User", userSchema);

module.exports = User;
