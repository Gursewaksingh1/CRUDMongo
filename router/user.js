const express = require("express");
const router = new express.Router();
const userController = require("../controller/user");

//auth APIs
router.get("/", userController.getUser);
router.get("/:id", userController.getUserById);
router.post("/", userController.addUser);
router.put("/", userController.UpdateUser);
router.delete("/", userController.deleteUser);

module.exports = router;