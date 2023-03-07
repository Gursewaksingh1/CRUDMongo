require("dotenv").config();
const express = require("express");
const app = express();
let port = 3000;
let URL = process.env.URL
const mongoose = require("mongoose");
const userRouter = require("./router/user");
app.use(express.json());

app.use("/user", userRouter);
mongoose.connect(URL);
app.listen(port,() => console.log("conneted to"+port))