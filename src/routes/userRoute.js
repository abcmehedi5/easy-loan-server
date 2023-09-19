const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/user", async (req, res) => {
  const userData = req.body;
  const query = { email: userData.email };
  await userController.createUser(query, userData);
  res.status(200).send({ message: "User Create Successfull" });
});

module.exports= router;