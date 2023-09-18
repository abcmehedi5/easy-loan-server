const connectToMongoDB = require("../Configs/db");


// create a loan for  request loan
const createLoan = async (loan) => {
  const client = await connectToMongoDB();
  const loanCollection = client.db("easy-loan").collection("loans");
  const result = await loanCollection.insertOne(loan);
  return result;
};


// get a user loans
const getMyLoans = async (query) =>{
  const client = await connectToMongoDB();
  const loanCollection = client.db("easy-loan").collection("loans");
  const result = loanCollection.find(query).toArray()
  return result
}

module.exports = {
  createLoan,
  getMyLoans
};
