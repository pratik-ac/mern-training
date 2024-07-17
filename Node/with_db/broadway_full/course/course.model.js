import mongoose from "mongoose";

// set rule/structure/schema
const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxLength: 60,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  duration: {
    type: Number, // in days
    required: true,
    min: 1,
  },
  addedBy: {
    type: mongoose.ObjectId,
    ref: "Admin",
    required: true,
  },
});

// create model/table
const Course = mongoose.model("Course", courseSchema);

export default Course;
