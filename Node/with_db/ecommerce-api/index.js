import express from 'express';
import connectDB from './database-connection/db.connect.js';
import userRoutes from './user/user.controller.js';
import productRoutes from './product/product.controller.js';
import cartRoutes from './cart/cart.controller.js';
import cors from 'cors';

const app = express();

// cross origin resource sharing
// to allow requests from frontend
app.use(
  cors({
    origin: '*', // allow requests from all domain
  })
);

//app to understand json
app.use(express.json());

//connect DB
await connectDB();

//register routes
app.use(userRoutes);
app.use(productRoutes);
app.use(cartRoutes);

//network port and server
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});
