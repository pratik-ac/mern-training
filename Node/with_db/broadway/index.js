import express from "express";
import connectDB from "./connectdb.js";
import courseRoutes from "./course/course.controller.js";

const app = express();

// to make app understand json
app.use(express.json());

// database connection
connectDB();

// register routes
app.use("/course", courseRoutes);

// network port and server
const PORT = 8010;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
