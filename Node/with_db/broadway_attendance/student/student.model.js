import mongoose from 'mongoose';

// set schema/rule/structure
const studentSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 55,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 55,
    },
    address: {
      type: String,
      required: true,
      trim: true,
      maxlength: 60,
    },
    adminId: {
      type: mongoose.ObjectId,
      required: true,
      ref: 'User',
    },
    gender: {
      type: String,
      required: true,
      enum: ['male', 'female', 'other'],
    },
  },
  {
    timestamps: true,
  }
);

// create table/collection/model
const Student = mongoose.model('Student', studentSchema);

export default Student;
