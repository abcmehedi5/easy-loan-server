const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const LoanRequestRoute = require("./src/routes/LoanRequestRoute");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("easy loan is Running");
});

// routes
app.use("/loans", LoanRequestRoute);

// port listening
app.listen(port, () => {
  console.log(`easy loan app listening on port ${port}`);
});
