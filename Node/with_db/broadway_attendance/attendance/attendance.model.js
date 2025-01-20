import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema(
  {
    teacherId: {
      type: mongoose.ObjectId,
      ref: 'User',
      required: true,
    },
    studentId: {
      type: mongoose.ObjectId,
      ref: 'Student',
      required: true,
    },
    present: {
      type: Boolean,
      required: true,
    },
    absent: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Attendance = mongoose.model('Attendance', attendanceSchema);
export default Attendance;
