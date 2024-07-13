import mongoose from "mongoose";
import Course from "./course.model.js";
import Yup from "yup";

export const validateMongoIdFromParams = (req, res, next) => {
  // extract course id from req.params
  const id = req.params.id;

  // check for mongo id validity
  const isValidId = mongoose.isValidObjectId(id);

  // if not valid mongo id, throw error
  if (!isValidId) {
    return res.status(400).send({ message: "Invalid mongo id." });
  }

  next();
};

export const addCourse = async (req, res) => {
  //  extract new values from req.body
  const newCourse = req.body;

  // insert into db
  await Course.create(newCourse);

  return res.status(201).send({ message: "Course is added successfully." });
};

export const validateCourseData = async (req, res, next) => {
  const courseValidationSchema = Yup.object({
    title: Yup.string()
      .required("Name is required.")
      .trim()
      .max(100, "Name must be at most 100 characters.")
      .lowercase(),
    instructor: Yup.string().required().trim().max(50),
    price: Yup.number().required().min(2000),
    duration: Yup.string().trim().max(50).required(),
  });

  try {
    const validatedData = await courseValidationSchema.validate(req.body);
    req.body = validatedData;
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }

  next();
};

export const deleteCourse = async (req, res) => {
  // extract course id from req.params
  const courseId = req.params.id;

  // find course
  const requiredCourse = await Course.findById(courseId);

  // if not course, throw error
  if (!requiredCourse) {
    return res.status(404).send({ message: "Course does not exist." });
  }

  // delete course
  await Course.findByIdAndDelete(courseId);

  // send res
  return res.status(200).send({ message: "Course is deleted successfully." });
};

export const listCourse = async (req, res) => {
  const courses = await Course.find();

  return res.status(200).send({ message: "success", courseList: courses });
};

export const getCourseByTitle = async (req, res) => {
  // find course by title
  const course = await Course.find({ title: req.params.title });

  // if not course, throw error
  if (course.length === 0) {
    return res.status(404).send({ message: "Course does not exist." });
  }

  // send res
  return res.status(200).send({ message: "success", courseDetails: course });
};

export const validateCourseByTitle = async (req, res, next) => {
  // extract title from req.params
  const title = req.params.title;

  // check for mongo title validity
  const isValidTitle = typeof title === "string";

  // if not valid mongo title, throw error
  if (!isValidTitle) {
    return res.status(400).send({ message: "Invalid mongo title." });
  }

  next();
};

export const editCourse = async (req, res) => {
  // find course
  const course = await Course.findById(req.params.id);

  // if not course, throw error
  if (!course) {
    return res.status(404).send({ message: "Course does not exist." });
  }

  // extract new values from req.body
  const newValues = req.body;
  await Course.findByIdAndUpdate(req.params.id, { ...newValues });

  // send res
  return res.status(200).send({ message: "Course is updated successfully." });
};
