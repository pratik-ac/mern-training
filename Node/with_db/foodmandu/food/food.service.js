import mongoose from "mongoose";
import Food from "./food.model.js";
import Yup from "yup";

export const validateFoodData = async (req, res, next) => {
  const data = req.body;

  const addFoodSchema = Yup.object({
    name: Yup.string().required().trim().max(50),
    price: Yup.number().min(0).required(),
  });

  try {
    const validatedData = await addFoodSchema.validate(data);
    req.body = validatedData;
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }

  next();
};

export const addFoodData = async (req, res) => {
  // extract new data from req.body
  const newFoodItems = req.body;

  // insert to db
  await Food.create(newFoodItems);

  // send res
  return res.status(200).send({ message: "Food item is added successfully!" });
};

export const findAllFoodItems = async (req, res) => {
  const foodItems = await Food.find();

  return res.status(200).send({ message: "success", foodList: foodItems });
};

export const validateMongoIdFromParams = (req, res, next) => {
  // extract if from params
  const id = req.params.id;

  // check for mongo id validity
  const isValidId = mongoose.isValidObjectId(id);

  // if not valid id, throw error
  if (!isValidId) {
    return res.status(400).send({ message: "Invalid Mongo ID!!!" });
  }

  // call next function
  next();
};

export const checkRequiredFoodItems = async (req, res, next) => {
  // extract foodId from req.params
  const foodId = req.params.id;

  // find food using foodId
  const requiredFoodItem = await Food.findById(foodId);

  // if not food, throw error
  if (!requiredFoodItem) {
    return res.status(400).send({ message: "Food item does not exists!!!" });
  }

  req.foodItem = requiredFoodItem;

  // call next function
  next();
};

export const getFoodItemById = (req, res) => {
  // send res
  return res.status(200).send({ message: "success", foodItem: req.foodItem });
};

export const deleteFood = async (req, res) => {
  // extract from body
  const foodId = req.params.id;

  // delete restaurant
  await Food.findByIdAndDelete(foodId);

  // send res
  return res
    .status(200)
    .send({ message: "Food item is deleted successfully." });
};

export const updateFood = async (req, res) => {
  // extract food id from params
  const foodId = req.params.id;

  // extract new values from req.body
  const newValues = req.body;

  // update food items
  await Food.findByIdAndUpdate(foodId, { ...newValues });

  // send res
  return res
    .status(200)
    .send({ message: "Food item is updated successfully!" });
};

// ! CTRL+Space => to import shortcut
// ! ALT+Shift+4 => removes unused imports shortcut
