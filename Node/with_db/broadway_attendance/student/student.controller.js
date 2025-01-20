import express from 'express';
import { isAdmin, isTeacher } from '../middleware/authentication.middleware.js';
import validateReqBody from '../middleware/validate.req.body.js';
import { addStudentValidationSchema } from './student.validation.js';
import Student from './student.model.js';
import validateMongoIdFromParams from '../middleware/validate.mongo.id.js';

const router = express.Router();

// * add student
router.post(
  '/student/add',
  isAdmin,
  validateReqBody(addStudentValidationSchema),
  async (req, res) => {
    // extract new student from req.body
    const newStudent = req.body;

    newStudent.adminId = req.loggedInUserId;

    // save product
    await Student.create(newStudent);

    // send res
    return res.status(201).send({ message: 'Student is added successfully.' });
  }
);

// * delete student
router.delete(
  '/student/delete/:id',
  isAdmin,
  validateMongoIdFromParams,
  async (req, res) => {
    // extract student id from req.params
    const studentId = req.params.id;

    // find student using studentId
    const student = await Student.findById(studentId);

    // if not student found, throw error
    if (!student) {
      return res.status(404).send({ message: 'Student does not exists' });
    }

    // delete student
    await Student.findByIdAndDelete(studentId);

    // send res
    return res.status(200).send({ message: 'Student is deleted successfully' });
  }
);

// * list all student
router.get('/student/list', isAdmin, async (req, res) => {
  // find all student
  const students = await Student.find();

  // send res
  return res.status(200).send({ message: 'success', studentList: students });
});

export default router;
