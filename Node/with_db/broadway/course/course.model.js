import mongoose from "mongoose";

// set schema
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 100,
    trim: true,
  },
  instructor: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  price: {
    type: Number,
    required: true,
    min: 2000,
  },
  duration: {
    type: String,
    maxLength: 50,
    trim: true,
    required: true,
  },
});

// create collection
const Course = mongoose.model("Course", courseSchema);

export default Course;
