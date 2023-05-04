const User = require("../models/table.model");
const fs = require("fs");

exports.getAllUsers = async (req, res) => {
  try{



//pagination
const page = req.query.page * 1 ||1
const limit = req.query.limit *1 ||100
const skip = (page-1) * limit


let query = User.find().skip(skip).limit(limit)
 




//executing query
    const users = await query;

  res.status(200).json({
    status: "success",

    results: users.length,
    data: users,
  });
  }catch(error){
    console.error(error)
  }
};

exports.createuser = async (req, res) => {
  const newUser = await User.create(req.body);
  res.status(200).json({
    staus: "success",
    data: {
      user: newUser,
    },
  });
};
