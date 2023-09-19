const connectToMongoDB = require("../Configs/db");

const createUser = async (query, userData) => {
  const client = await connectToMongoDB();
  const userCollection = client.db("easy-loan").collection("users");

  const existingUser = await userCollection.findOne(query);
  if (existingUser) {
    return { message: "user already exists" };
  }
  const result = await userCollection.insertOne(userData);
  return result;
};

module.exports = {
  createUser,
};
