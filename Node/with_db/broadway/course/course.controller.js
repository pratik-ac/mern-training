import express from "express";
import {
  validateMongoIdFromParams,
  addCourse,
  validateCourseData,
  deleteCourse,
  listCourse,
  validateCourseByTitle,
  getCourseByTitle,
  editCourse,
} from "./course.service.js";

const router = express.Router();

// * add course
router.post("/add", validateCourseData, addCourse);

// * delete course by id
router.delete("/delete/:id", validateMongoIdFromParams, deleteCourse);

// * get course list
router.get("/list", listCourse);

// * get course by title
router.get("/list/:title", validateCourseByTitle, getCourseByTitle);

// * edit course by id
router.put("/edit/:id", validateMongoIdFromParams, editCourse);

export default router;
