import mongoose from "mongoose";

const checkMongoIdValidity = (id) => mongoose.isValidObjectId(id); // ! this give true or false

export default checkMongoIdValidity;
