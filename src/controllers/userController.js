const connectToMongoDB = require("../Configs/db");


// post user information 
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

// check admin users
const adminCheck = async (query) => {
  const client = await connectToMongoDB();
  const userCollection = client.db("easy-loan").collection("users");
  const user = await userCollection.findOne(query);
  return user;
};

module.exports = {
  createUser,
  adminCheck
};
