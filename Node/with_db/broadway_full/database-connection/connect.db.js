import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://acharyapratik63:pratik123@cluster0.7zvadme.mongodb.net/KEC_BROADWAY?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("DB connection established....");
  } catch (error) {
    console.log("DB connection failed...");
    console.log(error.message);
    process.exit();
  }
};
export default connectDB;
