const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default:""
    },
    email: {
      type: String,
      default:""
    },
    password: {
      type: String,
      default:""
    },
    address:{
        type:String,
        default:""
    }
  },
  
  { timestamps: true }
);

const usersCollection = new mongoose.model("users", userSchema);

module.exports = usersCollection;