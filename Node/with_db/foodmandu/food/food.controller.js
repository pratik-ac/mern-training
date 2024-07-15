import express from "express";
import {
  validateFoodData,
  addFoodData,
  findAllFoodItems,
  validateMongoIdFromParams,
  checkRequiredFoodItems,
  getFoodItemById,
  deleteFood,
  updateFood,
} from "./food.service.js";

const router = express.Router();

// * add food item
router.post(validateFoodData, addFoodData);

// * get all food items
router.get("/list", findAllFoodItems);

// * get product detail by id
router.get(
  "/detail/:id",
  validateMongoIdFromParams,
  checkRequiredFoodItems,
  getFoodItemById
);

// * delete food item by id
router.delete(
  "/delete/:id",
  validateMongoIdFromParams,
  checkRequiredFoodItems,
  deleteFood
);

// * update food item by id
router.put(
  "/update/:id",
  validateMongoIdFromParams,
  validateFoodData,
  updateFood
);
export default router;
