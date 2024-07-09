import mongoose from "mongoose";

const dbUserName = "acharyapratik63";
const dbPassword = encodeURIComponent("pratik123");
const dbHost = "cluster0.7zvadme.mongodb.net";
const dbName = "kec-b4-netflix";

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${dbUserName}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("DB connection established...");
  } catch (error) {
    console.log("DB connection failed...");
    console.log(error.message);
  }
};

export default connectDB;
