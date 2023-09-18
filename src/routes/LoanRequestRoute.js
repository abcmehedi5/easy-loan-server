const express = require("express");
const router = express.Router();
const loanRequestController = require("../controllers/loanRequestController");

router.post("/loan", async (req, res) => {
  const loan = req.body;
  await loanRequestController.createLoan(loan);
  res.status(200).send({ message: "loan request successfull" });
});

module.exports = router;
