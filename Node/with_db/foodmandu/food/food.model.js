import mongoose from "mongoose";

// quantity detail
const quantityDetail = new mongoose.Schema({
  // ! can be used for adding quantity details if necessary by adding quantity=quantityDetail in set schema
  value: Number,
  unit: String,
});

// set schema
const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  price: {
    type: Number,
    min: 0,
    required: true,
  },
});

// create table
const Food = mongoose.model("Food", foodSchema);

export default Food;
