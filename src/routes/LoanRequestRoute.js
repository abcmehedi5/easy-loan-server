const express = require("express");
const router = express.Router();
const loanRequestController = require("../controllers/loanRequestController");

// create a loan for  request loan
router.post("/loan", async (req, res) => {
  const loan = req.body;
  await loanRequestController.createLoan(loan);
  res.status(200).send({ message: "loan request successfull" });
});

// get a single user loans
router.get("/loan", async (req, res) => {
  const email = req.query.email;
  const query = { email: email };
  const result = await loanRequestController.getMyLoans(query);
  res.status(200).send(result);
});
module.exports = router;
