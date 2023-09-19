const express = require("express");
const router = express.Router();
const loanRequestController = require("../controllers/loanRequestController");
const { ObjectId } = require("mongodb");

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

// single loan get

router.get("/loan-scheduled/:id", async (req, res) => {
  const id = req.params.id;
  const query = {
    _id: new ObjectId(id),
  };
  const response = await loanRequestController.loanScheduled(query);
  res.status(200).send(response);
});

// repayment router

router.patch("/repayment/:id", async (req, res) => {
  const amount = req.body.loanAmount;
  console.log(amount);
  const id = req.params.id;
  console.log(amount, id);
  const query = { _id: new ObjectId(id) };
  const updateDoc = {
    $inc: {
      loanAmount: -amount,
      dividedLoan: -1,
    },
  };
  await loanRequestController.repayment(query, updateDoc);
  res.status(200).send({ message: "Payment Successfull" });
});
module.exports = router;
