const bcrypt = require("bcrypt");
const User = require("../model/user");
const jwt = require("jsonwebtoken");
// const envData = require("../utils/config");

exports.addUser = async (req, res) => {
  let { name, email, password, address, confirmPassword } = req.body;
  try {
    if (password !== confirmPassword) {
      return res.status(500).send({
        success: false,
        statusCode: 500,
        message: "password and confirm password does not matched",
        data: [],
      });
    }
    let user = new User({
      name,
      email,
      password,
      address,
    });
    await user.save();
    res
      .status(200)
      .send({
        success: true,
        statusCode: 200,
        message: "user added",
        data: user,
      });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      statusCode: 500,
      message: err.message,
      data: [],
    });
  }
};

exports.getUser = async(req, res) => {
    try {
   let users = await User.find();
   res.status(200).send({
    success: true,
    statusCode: 200,
    message:"all users",
    data: users,
  });
    } catch (err) {
        console.log(err);
        res.status(500).send({
          success: false,
          statusCode: 500,
          message: err.message,
          data: [],
        });
    }
}
exports.getUserById = async(req, res) => {
    let {id} = req.params;
    try {
   let user = await User.findById({_id:id});
   res.status(200).send({
    success: true,
    statusCode: 200,
    message:"user details",
    data: user,
  });
    } catch (err) {
        console.log(err);
        res.status(500).send({
          success: false,
          statusCode: 500,
          message: err.message,
          data: [],
        });
    }
}
exports.UpdateUser = async(req, res) => {
    let { name, address, id } = req.body;
    try {
        let user = await User.findById({_id:id});
        if(!user){
            res.status(404).send({
                success: false,
                statusCode: 404,
                message: "invalid user id",
                data: [],
              }); 
        };
        await User.findByIdAndUpdate({_id:id},{
            name,address
        });
        res.status(200).send({
            success: true,
            statusCode: 200,
            message:"user updated",
            data: [],
          });
    } catch (err) {
        console.log(err);
        res.status(500).send({
          success: false,
          statusCode: 500,
          message: err.message,
          data: [],
        }); 
    }
}

exports.deleteUser = async(req, res) => {
   let {id} = req.query;
    try {
        let user = await User.findById({_id:id});
        if(!user){
            res.status(404).send({
                success: false,
                statusCode: 404,
                message: "invalid user id",
                data: [],
              }); 
        };
        await User.findByIdAndRemove({_id:id});
        res.status(200).send({
            success: true,
            statusCode: 200,
            message:"user deleted",
            data: [],
          });
    } catch (err) {
        console.log(err);
        res.status(500).send({
          success: false,
          statusCode: 500,
          message: err.message,
          data: [],
        }); 
    }
}