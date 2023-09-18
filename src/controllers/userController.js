const connectToMongoDB = require("../Configs/db");

const createUser = () => {
  const client = connectToMongoDB();
  const userCollection = client.db("easy-loan").collection("loans");
  const result = userCollection.find().toArray();
  return result;
};

module.exports = {
  createUser,
};
