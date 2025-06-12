import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "example-mongodb-url", // Replace with your MongoDB URI
    );
    console.log("DB connection established...");
  } catch (error) {
    console.log("DB connection failed...");
    console.log(error.message);
    process.exit();
  }
};

export default connectDB;
