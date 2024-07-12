import express from "express";
import connectDB from "./connect.db.js";
import customerRoutes from "./customer/customer.controller.js";
import restaurantRoutes from "./restaurant/restaurant.controller.js";

const app = express();

// to make app understand json
app.use(express.json());

// database connection
connectDB();

// register routes
app.use(customerRoutes);
app.use("/restaurant", restaurantRoutes); // ! /restaurant then we can only use /add in controller.js

// network port and server
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
