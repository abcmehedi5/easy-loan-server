const connectToMongoDB = require("../Configs/db");

// create a loan for  request loan
const createLoan = async (loan) => {
  const client = await connectToMongoDB();
  const loanCollection = client.db("easy-loan").collection("loans");
  const result = await loanCollection.insertOne(loan);
  return result;
};

// get a user loans
const getMyLoans = async (query) => {
  const client = await connectToMongoDB();
  const loanCollection = client.db("easy-loan").collection("loans");
  const result = loanCollection.find(query).toArray();
  return result;
};
// get all  for admin dashboard
const getAllLons = async () => {
  const client = await connectToMongoDB();
  const loanCollection = client.db("easy-loan").collection("loans");
  const result = loanCollection.find().toArray();
  return result;
};
// get a user scheduel loan
const loanScheduled = async (query) => {
  const client = await connectToMongoDB();
  const loanCollection = client.db("easy-loan").collection("loans");
  const result = loanCollection.findOne(query);
  return result;
};

// repayment

const repayment = async (query ,updateDoc) => {
  const client = await connectToMongoDB();
  const loanCollection = client.db("easy-loan").collection("loans");
  const result = await loanCollection.updateOne(query ,updateDoc);
  return result;
};


const updateStatus = async (query ,updateDoc) => {
  const client = await connectToMongoDB();
  const loanCollection = client.db("easy-loan").collection("loans");
  const result = await loanCollection.updateOne(query ,updateDoc);
  return result;
};

module.exports = {
  createLoan,
  getMyLoans,
  loanScheduled,
  repayment,
  getAllLons,
  updateStatus
};
