const connectToMongoDB = require("../Configs/db");

const createLoan = async (loan) => {
  const client = await connectToMongoDB();
  const loanCollection = client.db("easy-loan").collection("loans");
  const resutl = await loanCollection.insertOne(loan);
  return resutl;
};

module.exports = {
  createLoan,
};
