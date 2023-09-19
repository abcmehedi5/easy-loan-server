const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/user", async (req, res) => {
  const userData = req.body;
  const query = { email: userData.email };
  await userController.createUser(query, userData);
  res.status(200).send({ message: "User Create Successfull" });
});

// check admin by user

router.get("/admin", async (req, res) => {
  try {
    const email = req.query.email;
    const query = { email: email };
    const user = await userController.adminCheck(query);
    const isAdmin = { admin: user?.role == "admin" };
    res.send(isAdmin);
  } catch (error) {
    res.status(500).send({ error: "there was a server side error", error });
  }
});

module.exports = router;
