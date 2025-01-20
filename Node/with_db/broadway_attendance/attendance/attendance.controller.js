import express from 'express';
import { isTeacher } from '../middleware/authentication.middleware.js';
import validateReqBody from '../middleware/validate.req.body.js';
import { updateAttendanceValidationSchema } from './attendance.validation.js';
import Attendance from './attendance.model.js';
import checkMongoIdValidity from '../utils/mongo.id.validity.js';
import Student from '../student/student.model.js';

const router = express.Router();

// * attendance system
router.post(
  '/attendance/update',
  isTeacher,
  validateReqBody(updateAttendanceValidationSchema),
  (req, res, next) => {
    // validate student id from req.body
    const { studentId } = req.body;

    // check mongo id validity for studentId
    const isValidId = checkMongoIdValidity(studentId);

    // if not valid mongo id, throw error
    if (!isValidId) {
      return res.status(400).send({ message: 'Invalid mongo id' });
    }

    // call next function
    next();
  },
  async (req, res) => {
    // extract attendance data from req.body
    const { studentId, present, absent } = req.body;

    // Check if both present and absent are selected
    // Validate present and absent combination
    if ((present && absent) || (!present && !absent)) {
      return res
        .status(400)
        .send({
          message:
            'Either present or absent must be true, but not both or neither.',
        });
    }

    // find student using studentId
    const student = await Student.findOne({ _id: studentId });

    // if not student, throw error
    if (!student) {
      return res.status(404).send({ message: 'Student does not exits!' });
    }

    const attendance = await Attendance.findOne({
      studentId,
      teacherId: req.loggedInUserId,
    });

    // if attendance already exists
    if (attendance) {
      attendance.present = present || false;
      attendance.absent = absent || false;

      await attendance.save(); // Save the updated attendance record

      return res
        .status(200)
        .send({ message: 'Attendance updated successfully.' });
    }

    // If attendance doesn't exist, create a new attendance record
    await Attendance.create({
      studentId: studentId,
      teacherId: req.loggedInUserId,
      present: present || false,
      absent: absent || false,
    });

    // send res
    return res
      .status(200)
      .send({ message: 'Attendance is updated successfully' });
  }
);

export default router;
